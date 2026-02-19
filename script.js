document.addEventListener('DOMContentLoaded', () => {
    // 1. スクロールで表示
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('active');
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));

    // 2. 画像保護 (右クリック・ドラッグ禁止)
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('contextmenu', e => e.preventDefault());
        img.addEventListener('dragstart', e => e.preventDefault());
    });

    // 3. ナビゲーションの影
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        navbar.style.boxShadow = window.scrollY > 50 ? '0 2px 15px rgba(0,0,0,0.1)' : 'none';
    });

    // 4. モーダル機能
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-img');
    document.querySelectorAll('.gallery-img, .hover-item img').forEach(img => {
        img.addEventListener('click', () => {
            modal.style.display = "block";
            modalImg.src = img.src;
            document.body.style.overflow = 'hidden';
        });
    });
    const closeModal = () => {
        modal.style.display = "none";
        document.body.style.overflow = 'auto';
    };
    document.querySelector('.modal-close')?.addEventListener('click', closeModal);
    window.addEventListener('click', e => { if (e.target == modal) closeModal(); });
});