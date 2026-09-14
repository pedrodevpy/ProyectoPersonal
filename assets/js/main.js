/*
	Portafolio — Pedro Alejandro Molina Ortiz
	Basado originalmente en Escape Velocity by HTML5 UP (html5up.net | @ajlkn)
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)

	JS nativo, sin dependencias:
	- Tema claro/oscuro (persistente)
	- Idioma ES/EN (persistente)
	- Menú móvil
	- Header con sombra al hacer scroll + sección activa
	- Animaciones de entrada (IntersectionObserver)
*/

(function () {
	'use strict';

	var root = document.documentElement;
	var body = document.body;
	var storage = {
		get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
		set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
	};

	// Quita el bloqueo de animaciones tras la carga inicial.
	window.addEventListener('load', function () {
		window.setTimeout(function () { body.classList.remove('is-preload'); }, 100);
	});

	/* ---------------------------------------------------------------------
	   Tema
	   --------------------------------------------------------------------- */

	var themeToggle = document.getElementById('theme-toggle');
	var themeMeta = document.querySelector('meta[name="theme-color"]');

	function applyTheme(theme) {
		root.setAttribute('data-theme', theme);
		if (themeMeta) themeMeta.setAttribute('content', theme === 'light' ? '#f7f7f9' : '#0b0b0e');
		if (themeToggle) {
			var isEn = root.lang === 'en';
			themeToggle.setAttribute('aria-label', theme === 'light'
				? (isEn ? 'Switch to dark theme' : 'Cambiar a tema oscuro')
				: (isEn ? 'Switch to light theme' : 'Cambiar a tema claro'));
		}
	}

	// Oscuro por defecto; el script inline del <head> ya aplicó la elección guardada.
	applyTheme(root.getAttribute('data-theme') || 'dark');

	if (themeToggle) {
		themeToggle.addEventListener('click', function () {
			var next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
			applyTheme(next);
			storage.set('theme', next);
		});
	}

	/* ---------------------------------------------------------------------
	   Idioma
	   --------------------------------------------------------------------- */

	var langToggle = document.getElementById('lang-toggle');
	var i18nNodes = document.querySelectorAll('[data-i18n]');
	var cvLinks = document.querySelectorAll('[data-cv]');
	var metaDesc = document.querySelector('meta[name="description"]');
	var dict = { es: {}, en: window.I18N_EN || {} };

	// El español es el idioma de origen: se captura del propio HTML.
	dict.es['meta.title'] = document.title;
	dict.es['meta.description'] = metaDesc ? metaDesc.getAttribute('content') : '';
	i18nNodes.forEach(function (el) {
		dict.es[el.getAttribute('data-i18n')] = el.textContent;
	});

	function applyLang(lang) {
		var t = dict[lang] || dict.es;
		root.setAttribute('lang', lang);
		i18nNodes.forEach(function (el) {
			var key = el.getAttribute('data-i18n');
			if (t[key] != null) el.textContent = t[key];
		});
		document.title = t['meta.title'] || dict.es['meta.title'];
		if (metaDesc) metaDesc.setAttribute('content', t['meta.description'] || dict.es['meta.description']);
		cvLinks.forEach(function (a) {
			a.setAttribute('href', lang === 'en' ? 'assets/pdf/HV-EN-PedroMolina.pdf' : 'assets/pdf/HV-ES-PedroMolina.pdf');
		});
		if (langToggle) {
			langToggle.querySelector('span').textContent = lang === 'en' ? 'ES' : 'EN';
			langToggle.setAttribute('aria-label', lang === 'en' ? 'Cambiar a español' : 'Switch to English');
			langToggle.setAttribute('title', lang === 'en' ? 'Español' : 'English');
		}
		applyTheme(root.getAttribute('data-theme') || 'dark');
	}

	if (root.lang === 'en') applyLang('en');

	if (langToggle) {
		langToggle.addEventListener('click', function () {
			var next = root.lang === 'en' ? 'es' : 'en';
			applyLang(next);
			storage.set('lang', next);
		});
	}

	/* ---------------------------------------------------------------------
	   Menú móvil
	   --------------------------------------------------------------------- */

	var navToggle = document.getElementById('nav-toggle');
	var nav = document.getElementById('nav');

	function setNav(open) {
		body.classList.toggle('nav-open', open);
		if (navToggle) {
			navToggle.setAttribute('aria-expanded', String(open));
			var isEn = root.lang === 'en';
			navToggle.setAttribute('aria-label', open
				? (isEn ? 'Close menu' : 'Cerrar menú')
				: (isEn ? 'Open menu' : 'Abrir menú'));
		}
	}

	if (navToggle && nav) {
		navToggle.addEventListener('click', function () {
			setNav(!body.classList.contains('nav-open'));
		});
		nav.addEventListener('click', function (e) {
			if (e.target.closest('a')) setNav(false);
		});
		document.addEventListener('keydown', function (e) {
			if (e.key === 'Escape' && body.classList.contains('nav-open')) {
				setNav(false);
				navToggle.focus();
			}
		});
		document.addEventListener('click', function (e) {
			if (body.classList.contains('nav-open') && !e.target.closest('#header')) setNav(false);
		});
	}

	/* ---------------------------------------------------------------------
	   Header al hacer scroll + sección activa
	   --------------------------------------------------------------------- */

	var header = document.getElementById('header');
	var navLinks = nav ? Array.prototype.slice.call(nav.querySelectorAll('a[href^="#"]')) : [];
	var sections = navLinks
		.map(function (a) { return document.querySelector(a.getAttribute('href')); })
		.filter(Boolean);

	function onScroll() {
		if (header) header.classList.toggle('is-scrolled', window.scrollY > 8);
	}
	window.addEventListener('scroll', onScroll, { passive: true });
	onScroll();

	if ('IntersectionObserver' in window && sections.length) {
		var current = null;
		var spy = new IntersectionObserver(function (entries) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting) current = entry.target.id;
			});
			navLinks.forEach(function (a) {
				var active = a.getAttribute('href') === '#' + current;
				if (active) a.setAttribute('aria-current', 'true');
				else a.removeAttribute('aria-current');
			});
		}, { rootMargin: '-40% 0px -55% 0px' });
		sections.forEach(function (s) { spy.observe(s); });
	}

	/* ---------------------------------------------------------------------
	   Animaciones de entrada
	   --------------------------------------------------------------------- */

	var reveals = document.querySelectorAll('.reveal');
	var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	if (!reduceMotion && 'IntersectionObserver' in window) {
		var io = new IntersectionObserver(function (entries) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting) {
					entry.target.classList.add('is-visible');
					io.unobserve(entry.target);
				}
			});
		}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
		reveals.forEach(function (el) { io.observe(el); });
	} else {
		reveals.forEach(function (el) { el.classList.add('is-visible'); });
	}

	/* ---------------------------------------------------------------------
	   Año del footer
	   --------------------------------------------------------------------- */

	var year = document.getElementById('year');
	if (year) year.textContent = String(new Date().getFullYear());

})();
