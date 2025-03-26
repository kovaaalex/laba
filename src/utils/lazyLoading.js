import { useEffect } from 'react';

export const useLazyLoading = () => {
  useEffect(() => {
    let observer;

    const observeImages = () => {
      const lazyImages = document.querySelectorAll('img.lazy');
      
      if ('IntersectionObserver' in window) {
        observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target;
              img.src = img.dataset.src || '';
              img.onload = () => img.classList.remove('lazy');
              observer.unobserve(img);
            }
          });
        }, {
          rootMargin: '200px', // Начинаем загружать заранее
          threshold: 0.01
        });

        lazyImages.forEach(img => observer.observe(img));
      } else {
        // Fallback для старых браузеров
        lazyImages.forEach(img => {
          img.src = img.dataset.src || '';
          img.classList.remove('lazy');
        });
      }
    };

    // Первичная инициализация
    observeImages();

    // Перехватываем динамические изменения DOM
    const mutationObserver = new MutationObserver(observeImages);
    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      observer?.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
};