const productsData = [
    // INSECTICIDES
    {
        id: 'KA-INS-001',
        name: 'QUILON',
        category: 'insecticides',
        image: 'Images/Products/KA-INS-001.png',
        activeIngredient: 'Abamectin 1.9% EC',
        packaging: '100ml, 250ml, 500ml, 1ltr'
    },
    {
        id: 'KA-INS-002',
        name: 'ASTOR',
        category: 'insecticides',
        image: 'Images/Products/KA-INS-002.png',
        activeIngredient: 'Acetamipride 20% SP',
        packaging: '100ml, 250ml'
    },
    {
        id: 'KA-INS-003',
        name: 'CREYON',
        category: 'insecticides',
        image: 'Images/Products/KA-INS-003.png',
        activeIngredient: 'Chlorantraniliprole 18.5% w/w SC',
        packaging: '30ml, 60ml, 100ml, 150ml'
    },
    {
        id: 'KA-INS-004',
        name: 'TENDEM',
        category: 'insecticides',
        image: 'Images/Products/KA-INS-004.png',
        activeIngredient: 'Chlorantraniliprole 9.3% + Lambdacyhalothrin 4.6% ZC',
        packaging: '100ml, 200ml, 500ml'
    },
    {
        id: 'KA-INS-005',
        name: 'TURTLE',
        category: 'insecticides',
        image: 'Images/Products/KA-INS-005.png',
        activeIngredient: 'Chlorfenapyr 10% SC',
        packaging: '300ml'
    },
    {
        id: 'KA-INS-006',
        name: 'BIFLEX-505',
        category: 'insecticides',
        image: 'Images/Products/KA-INS-006.png',
        activeIngredient: 'Chlorpyriphos 50% + Cypermethrin 5% EC',
        packaging: '250ml, 500ml, 1ltr'
    },
    {
        id: 'KA-INS-007',
        name: 'TROY',
        category: 'insecticides',
        image: 'Images/Products/KA-INS-007.png',
        activeIngredient: 'Clothianidin 50% WG',
        packaging: '100gm, 250gm'
    },
    {
        id: 'KA-INS-008',
        name: 'OCTOPUS',
        category: 'insecticides',
        image: 'Images/Products/KA-INS-008.png',
        activeIngredient: 'Emamectin Benzoate 1.9% EC',
        packaging: '100ml, 250ml, 500ml, 1ltr'
    },
    {
        id: 'KA-INS-009',
        name: 'ELEVATE',
        category: 'insecticides',
        image: 'Images/Products/KA-INS-009.png',
        activeIngredient: 'Emamectin Benzoate 5% SG',
        packaging: '50ml, 100gm, 250gm, 500gm'
    },
    {
        id: 'KA-INS-010',
        name: 'REPHILL GR',
        category: 'insecticides',
        image: 'Images/Products/KA-INS-010.png',
        activeIngredient: 'Fipronil 0.3% GR',
        packaging: '5kg'
    },
    {
        id: 'KA-INS-011',
        name: 'AUSTINE',
        category: 'insecticides',
        image: 'Images/Products/KA-INS-011.png',
        activeIngredient: 'Fipronil 40% + Imidacloprid 40% WG',
        packaging: '40gm, 100gm'
    },
    {
        id: 'KA-INS-012',
        name: 'REPHILL',
        category: 'insecticides',
        image: 'Images/Products/KA-INS-012.png',
        activeIngredient: 'Fipronil 5% SC',
        packaging: '100ml, 250ml, 500ml, 1ltr'
    },
    {
        id: 'KA-INS-013',
        name: 'AXYL',
        category: 'insecticides',
        image: 'Images/Products/KA-INS-013.png',
        activeIngredient: 'Imidacloprid 30.5% SC',
        packaging: '100gm, 250gm, 500gm, 1kg'
    },
    {
        id: 'KA-INS-014',
        name: 'PECTUS',
        category: 'insecticides',
        image: 'Images/Products/KA-INS-014.png',
        activeIngredient: 'Pyriproxyfen 5% + Diafenthiuron 25% SE',
        packaging: '100ml, 250ml, 500ml'
    },
    {
        id: 'KA-INS-015',
        name: 'PROTECTOR',
        category: 'insecticides',
        image: 'Images/Products/KA-INS-015.png',
        activeIngredient: 'Thiamethoxam 12.6% + LambdaCyhalothrin 9.5% ZC',
        packaging: '200ml, 500ml, 1ltr'
    },
    {
        id: 'KA-INS-016',
        name: 'CONTROL',
        category: 'insecticides',
        image: 'Images/Products/KA-INS-016.png',
        activeIngredient: 'Thiamethoxam 25% WG',
        packaging: '100gm, 250gm, 500gm, 1kg'
    },
    {
        id: 'KA-INS-017',
        name: 'OCTANE',
        category: 'insecticides',
        image: 'Images/Products/KA-INS-017.png',
        activeIngredient: 'Thiamethoxam 30% FS',
        packaging: '100ml, 250ml, 500ml, 1ltr'
    },
    {
        id: 'KA-INS-018',
        name: 'TELEX',
        category: 'insecticides',
        image: 'Images/Products/KA-INS-018.png',
        activeIngredient: 'Tolfenpyrad 15% EC',
        packaging: '100ml, 250ml, 500ml, 1ltr'
    },

    // FUNGICIDES

    {
        id: 'KA-FUN-001',
        name: 'LINCON',
        category: 'fungicides',
        image: 'Images/Products/KA-FUN-001.png',
        activeIngredient: 'Azoxystrobin 11% + Tebuconazole 18.3% w/w SC',
        packaging: '100ml, 250ml, 500ml, 1ltr'
    },
    {
        id: 'KA-FUN-002',
        name: 'APEX',
        category: 'fungicides',
        image: 'Images/Products/KA-FUN-002.png',
        activeIngredient: 'Azoxystrobin 18.2% w/w + Difenoconazole 11.4% w/w SC',
        packaging: '100ml, 250ml, 500ml, 1ltr'
    },
    {
        id: 'KA-FUN-003',
        name: 'CADILAC',
        category: 'fungicides',
        image: 'Images/Products/KA-FUN-003.png',
        activeIngredient: 'Carbendazim 12% + Mancozeb 63% WP',
        packaging: '500gm, 1kg'
    },
    {
        id: 'KA-FUN-004',
        name: 'COPPERSTONE',
        category: 'fungicides',
        image: 'Images/Products/KA-FUN-004.png',
        activeIngredient: 'Copper Oxychloride containing copper contents 50.00% w/w WP',
        packaging: '500gm'
    },
    {
        id: 'KA-FUN-005',
        name: 'CALLISTO',
        category: 'fungicides',
        image: 'Images/Products/KA-FUN-005.png',
        activeIngredient: 'Dimethomorph 50% WP',
        packaging: '200gm'
    },
    {
        id: 'KA-FUN-006',
        name: 'METPHILL',
        category: 'fungicides',
        image: 'Images/Products/KA-FUN-006.png',
        activeIngredient: 'Metalaxyl 8% + Mancozeb 64% WP',
        packaging: '500gm'
    },
    {
        id: 'KA-FUN-007',
        name: 'PLEXTONE',
        category: 'fungicides',
        image: 'Images/Products/KA-FUN-007.png',
        activeIngredient: 'Metiram 55% + Pyraclostrobin 5% WG',
        packaging: '600gm'
    },
    {
        id: 'KA-FUN-008',
        name: 'LENOX',
        category: 'fungicides',
        image: 'Images/Products/KA-FUN-008.png',
        activeIngredient: 'Pyraclostrobin 20% WG',
        packaging: '100gm, 200gm'
    },
    {
        id: 'KA-FUN-009',
        name: 'NEON',
        category: 'fungicides',
        image: 'Images/Products/KA-FUN-009.png',
        activeIngredient: 'Tebuconazole 25.9% EC',
        packaging: '250ml, 500ml, 1ltr'
    },
    {
        id: 'KA-FUN-010',
        name: 'MEJESTIC',
        category: 'fungicides',
        image: 'Images/Products/KA-FUN-010.png',
        activeIngredient: 'Tebuconazole 50% + Trifloxystrobin 25% WG',
        packaging: '100gm'
    },
    {
        id: 'KA-FUN-011',
        name: 'ACRON',
        category: 'fungicides',
        image: 'Images/Products/KA-FUN-011.png',
        activeIngredient: 'Thiophanate Methyl 70% WP',
        packaging: '500gm, 1kg'
    },
    {
        id: 'KA-FUN-012',
        name: 'MAKWIN',
        category: 'fungicides',
        image: 'Images/Products/KA-FUN-012.png',
        activeIngredient: 'Picoxystrobin 6.78% w/w + Tricyclazole 20.33% w/w SC',
        packaging: '400ml, 1ltr'
    },
    {
        id: 'KA-FUN-013',
        name: 'FOXTAIL',
        category: 'fungicides',
        image: 'Images/Products/KA-FUN-013.png',
        activeIngredient: 'Metiram 44% + Dimethomorph 9% WG',
        packaging: '600gm'
    },
    {
        id: 'KA-FUN-014',
        name: 'VALIDAX',
        category: 'fungicides',
        image: 'Images/Products/KA-FUN-014.png',
        activeIngredient: 'Validamycin 3% L',
        packaging: '1ltr'
    },
    {
        id: 'KA-FUN-015',
        name: 'BORLIN',
        category: 'fungicides',
        image: 'Images/Products/KA-FUN-015.png',
        activeIngredient: 'Boscalid 25.2% + Pyraclostrobin 12.8% WG',
        packaging: '120gm, 240gm, 600gm'
    },
    {
        id: 'KA-FUN-016',
        name: 'NASCOT',
        category: 'fungicides',
        image: 'Images/Products/KA-FUN-016.png',
        activeIngredient: 'Thiophanate Methyl 450g/l + Pyraclostrobin 50g/l FS',
        packaging: '200ml, 400ml, 1ltr'
    },
    {
        id: 'KA-FUN-017',
        name: 'OPHELIA',
        category: 'fungicides',
        image: 'Images/Products/KA-FUN-017.png',
        activeIngredient: 'Picoxystrobin 22.52% SC',
        packaging: '400ml'
    },

    // HERBICIDES
    {
        id: 'KA-HER-001',
        name: 'TREXIL-71',
        category: 'herbicides',
        image: 'Images/Products/KA-HER-001.png',
        activeIngredient: 'Ammonium Salt of Glyphosate 71% SG',
        packaging: '100gm'
    },
    {
        id: 'KA-HER-002',
        name: 'ATRAPHILL',
        category: 'herbicides',
        image: 'Images/Products/KA-HER-002.png',
        activeIngredient: 'Atrazine 50% WP',
        packaging: '500gm'
    },
    {
        id: 'KA-HER-003',
        name: 'KENSTOCK',
        category: 'herbicides',
        image: 'Images/Products/KA-HER-003.png',
        activeIngredient: 'Diclosulam 84% WG',
        packaging: '12.8gm'
    },
    {
        id: 'KA-HER-004',
        name: 'IBIZA',
        category: 'herbicides',
        image: 'Images/Products/KA-HER-004.png',
        activeIngredient: 'Imazethapyr 10% SL',
        packaging: '250ml, 500ml, 1ltr'
    },
    {
        id: 'KA-HER-005',
        name: 'TWILL',
        category: 'herbicides',
        image: 'Images/Products/KA-HER-005.png',
        activeIngredient: 'Imazethapyr 70% WG',
        packaging: '50gm, 100gm'
    },
    {
        id: 'KA-HER-006',
        name: 'Q PHILL',
        category: 'herbicides',
        image: 'Images/Products/KA-HER-006.png',
        activeIngredient: 'Quizalofop Ethyl 10% EC',
        packaging: '250ml, 500ml, 1ltr'
    },

    // PGR

    {
        id: 'KA-PGR-001',
        name: 'Z+',
        category: 'PGR/Bio-stimulants',
        image: 'Images/Products/KA-PGR-001.png',
        activeIngredient: 'Gibberellic Acid 0.001% L',
        packaging: '250ml, 500ml, 1ltr'
    },
    {
        id: 'KA-PGR-002',
        name: 'VOXTURE',
        category: 'PGR/Bio-stimulants',
        image: 'Images/Products/KA-PGR-002.png',
        activeIngredient: 'Paclobutrazole 40% SC',
        packaging: '50ml, 100ml'
    },
    {
        id: 'KA-PGR-003',
        name: 'TROVEX',
        category: 'PGR/Bio-stimulants',
        image: 'Images/Products/KA-PGR-003.png',
        activeIngredient: 'Triacontanol EW 0.1% Min.',
        packaging: '250ml, 500ml, 1ltr'
    },
    {
        id: 'KA-PGR-004',
        name: 'CARBOPHILL',
        category: 'PGR/Bio-stimulants',
        image: 'Images/Products/KA-PGR-004.png',
        activeIngredient: 'Organic Carbon',
        packaging: '250ml, 500ml, 1ltr'
    },
    {
        id: 'KA-PGR-005',
        name: 'WETPHILL',
        category: 'PGR/Bio-stimulants',
        image: 'Images/Products/KA-PGR-005.png',
        activeIngredient: 'Silicone Spreader',
        packaging: '50ml, 100ml, 250ml, 500ml, 1ltr'
    },
    {
        id: 'KA-PGR-006',
        name: 'QUINTEC',
        category: 'PGR/Bio-stimulants',
        image: 'Images/Products/KA-PGR-006.png',
        activeIngredient: 'Sea Weed Extract Liquid Bio Stimulant',
        packaging: '250ml, 500ml, 1ltr'
    },
    {
        id: 'KA-PGR-007',
        name: 'XPERT',
        category: 'PGR/Bio-stimulants',
        image: 'Images/Products/KA-PGR-007.png',
        activeIngredient: 'Liquid Humic',
        packaging: '500ml, 1ltr'
    },
    {
        id: 'KA-PGR-008',
        name: 'BRILLIA',
        category: 'PGR/Bio-stimulants',
        image: 'Images/Products/KA-PGR-008.png',
        activeIngredient: 'Ammino Acid & Vitamins Bio Stimulant',
        packaging: '100ml, 250ml, 500ml, 1ltr'
    },
        {
        id: 'KA-PGR-009',
        name: 'X-ROOT',
        category: 'PGR/Bio-stimulants',
        image: 'Images/Products/KA-PGR-009.png',
        activeIngredient: 'Humic Acid',
        packaging: '400gm'
    },


    // Fertilizers

    {
        id: 'KA-FR-001',
        name: 'BOINCE-UP',
        category: 'fertilizer',
        image: 'Images/Products/KA-FR-001.png',
        activeIngredient: 'NPK 10-54-10 Imported Fertilizer',
        packaging: '1KG, 25KG'
    },
    {
        id: 'KA-FR-002',
        name: 'VERSILE',
        category: 'fertilizer',
        image: 'Images/Products/KA-FR-002.png',
        activeIngredient: 'NPK 11-40-11 Imported Fertilizer',
        packaging: '1KG, 25KG'
    },
    {
        id: 'KA-FR-003',
        name: 'STAVROS',
        category: 'fertilizer',
        image: 'Images/Products/KA-FR-003.png',
        activeIngredient: 'NPK 15-07-30 Imported Fertilizer',
        packaging: '1KG, 25KG'
    },
    {
        id: 'KA-FR-004',
        name: 'GRAVIAL',
        category: 'fertilizer',
        image: 'Images/Products/KA-FR-004.png',
        activeIngredient: 'NPK 5-5-46 Imported Fertilizer',
        packaging: '1KG, 25KG'
    },
    {
        id: 'KA-FR-005',
        name: 'MEQUIL 11-11-8',
        category: 'fertilizer',
        image: 'Images/Products/KA-FR-005.png',
        activeIngredient: 'NPK 11:11:8 Fortifiled with Zink & Boron (Suspension) Liquid Fertilizer',
        packaging: '250ML, 500ML, 1LTR'
    },
    {
        id: 'KA-FR-006',
        name: 'MEQUIL 7-21-0',
        category: 'fertilizer',
        image: 'Images/Products/KA-FR-006.png',
        activeIngredient: 'Fortifiled NP 7:21:0 Liquid Fertilizer',
        packaging: '250ML, 500ML, 1LTR'
    },
    {
        id: 'KA-FR-007',
        name: 'MEQUIL 6-0-18',
        category: 'fertilizer',
        image: 'Images/Products/KA-FR-007.png',
        activeIngredient: 'NK 6:0:18 Fortifiled with Calcium Magnesium & Boron (Suspension) Liquid Fertilizer',
        packaging: '250ML, 500ML, 1LTR'
    },
    {
        id: 'KA-FR-008',
        name: 'MEQUIL MAXIMO',
        category: 'fertilizer',
        image: 'Images/Products/KA-FR-008.png',
        activeIngredient: 'Fortifiled Calcium Suspension Liquid Fertilizer',
        packaging: '250ML, 500ML, 1LTR'
    },
    {
        id: 'KA-FR-009',
        name: 'FOSTEL',
        category: 'fertilizer',
        image: 'Images/Products/KA-FR-009.png',
        activeIngredient: 'Potash derived from Rhodophytes',
        packaging: '90 gms'
    },
    {
        id: 'KA-FR-010',
        name: 'NEUPHILL',
        category: 'fertilizer',
        image: 'Images/Products/KA-FR-010.png',
        activeIngredient: 'Mix Micronutrent Fertilizer',
        packaging: '250gm, 500gm, 1 KG'
    },
    {
        id: 'KA-FR-011',
        name: 'MYCOPHILL',
        category: 'fertilizer',
        image: 'Images/Products/KA-FR-011.png',
        activeIngredient: 'Mycorrhizal Bio-Fertilizer (Granule)',
        packaging: '4 KG'
    },
    {
        id: 'KA-FR-012',
        name: 'MYCOPHILL ULTRA',
        category: 'fertilizer',
        image: 'Images/Products/KA-FR-012.png',
        activeIngredient: 'Mycorrhizal Bio-Fertilizer (Powder)',
        packaging: '100 GMS'
    }
];

// ============================================
// Mobile Menu Toggle
// ============================================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.navbar')) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
}

// ============================================
// Set Active Navigation Link
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    const currentLocation = location.pathname;
    const navLinks = document.querySelectorAll('.nav-menu a');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');

        if ((currentLocation.includes('index.html') && href === 'index.html') ||
            (currentLocation.endsWith('/') && href === 'index.html') ||
            (currentLocation.includes(href) && href !== 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Smooth scroll for anchor links
    smoothScrollLinks();

    // Initialize animations on scroll
    observeElements();

    // Load products if on products page
    if (currentLocation.includes('products.html')) {
        loadProducts();
    }
});

// ============================================
// Load Products from Data
// ============================================
function loadProducts() {
    const productsContainer = document.querySelector('.products-grid-large');

    if (!productsContainer) return;

    // Clear existing products
    productsContainer.innerHTML = '';

    // Create product HTML
    productsData.forEach(product => {
        // Use fallback image if the specified image doesn't exist
        const fallbackImage = 'Images/Logo.png';
        const productImage = product.image;

        const productHTML = `
            <div class="product-item" data-category="${product.category}">
                <div class="product-image">
                    <img src="${productImage}" alt="${product.name}" onerror="this.src='${fallbackImage}'">
                </div>
                <div class="product-details">
                    <h3>${product.name}</h3>
                    <p class="product-code">Product Code: ${product.id}</p>
                    <div class="product-specs">
                        <p><strong>Category:</strong> ${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</p>
                        <p><strong>Active Ingredient:</strong> ${product.activeIngredient}</p>
                        <p><strong>Packaging:</strong> ${product.packaging}</p>
                    </div>
                </div>
            </div>
        `;

        productsContainer.innerHTML += productHTML;
    });

    // Re-observe new elements for animations
    observeElements();
}

// ============================================
// Smooth Scroll for Anchor Links
// ============================================
function smoothScrollLinks() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// ============================================
// Intersection Observer for Animations
// ============================================
function observeElements() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all product cards and feature boxes
    document.querySelectorAll('.product-card, .feature, .product-item').forEach(element => {
        observer.observe(element);
    });
}

// ============================================
// Filter Products (for products page)
// ============================================
function filterProducts(category) {
    const products = document.querySelectorAll('.product-item');

    products.forEach(product => {
        if (category === 'all' || product.dataset.category === category) {
            product.style.display = 'block';
            setTimeout(() => {
                product.classList.add('fade-in');
            }, 10);
        } else {
            product.classList.remove('fade-in');
            product.style.display = 'none';
        }
    });

    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
}

// ============================================
// Form Validation (for contact page)
// ============================================
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return false;

    const inputs = form.querySelectorAll('input, textarea, select');
    let isValid = true;

    inputs.forEach(input => {
        if (input.hasAttribute('required') && input.value.trim() === '') {
            input.classList.add('error');
            isValid = false;
        } else {
            input.classList.remove('error');
        }

        // Email validation
        if (input.type === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(input.value)) {
                input.classList.add('error');
                isValid = false;
            }
        }

        // Phone validation
        if (input.type === 'tel') {
            const phoneRegex = /^[0-9]{10}$/;
            if (!phoneRegex.test(input.value.replace(/\D/g, ''))) {
                input.classList.add('error');
                isValid = false;
            }
        }
    });

    return isValid;
}

// ============================================
// Form Submission Handler
// ============================================
function handleFormSubmit(event, formId) {
    event.preventDefault();

    if (validateForm(formId)) {
        const form = document.getElementById(formId);

        // Show success message
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.textContent = 'Thank you! Your message has been sent successfully.';
        form.appendChild(successMessage);

        // Reset form
        form.reset();

        // Remove success message after 5 seconds
        setTimeout(() => {
            successMessage.remove();
        }, 5000);

        console.log('Form submitted successfully');
    } else {
        console.log('Form validation failed');
    }
}

// ============================================
// Add to Cart / Inquiry
// ============================================
function addToCart(productName) {
    alert(`${productName} has been added to your inquiry!\n\nPlease proceed to contact page to submit your inquiry.`);
    // You can later integrate with actual cart/inquiry system
}

// ============================================
// Search Functionality
// ============================================
function searchProducts(query) {
    const products = document.querySelectorAll('.product-item');
    const searchResults = [];

    products.forEach(product => {
        const title = product.textContent.toLowerCase();
        if (title.includes(query.toLowerCase())) {
            product.style.display = 'block';
            searchResults.push(product);
        } else {
            product.style.display = 'none';
        }
    });

    return searchResults.length;
}

// ============================================
// Scroll to Top Button
// ============================================
function initScrollToTop() {
    const scrollBtn = document.getElementById('scrollToTopBtn');

    if (!scrollBtn) {
        const btn = document.createElement('button');
        btn.id = 'scrollToTopBtn';
        btn.innerHTML = '↑';
        btn.className = 'scroll-to-top';
        document.body.appendChild(btn);
    }

    window.addEventListener('scroll', () => {
        const btn = document.getElementById('scrollToTopBtn');
        if (window.scrollY > 300) {
            btn.style.display = 'block';
        } else {
            btn.style.display = 'none';
        }
    });

    document.getElementById('scrollToTopBtn')?.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ============================================
// Add CSS for Scroll to Top Button
// ============================================
function addScrollToTopStyles() {
    if (document.getElementById('scrollStyles')) return;

    const style = document.createElement('style');
    style.id = 'scrollStyles';
    style.innerHTML = `
        .fade-in {
            animation: fadeInUp 0.6s ease-out;
        }
    `;
    document.head.appendChild(style);
}

// ============================================
// Initialize All Functions
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    addScrollToTopStyles();
    initScrollToTop();
    console.log('Kanephill Agritech - Website Initialized');
});

// ============================================
// Utility: Get Query Parameters
// ============================================
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// ============================================
// Utility: Format Phone Number
// ============================================
function formatPhoneNumber(phoneNumber) {
    const cleaned = phoneNumber.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        return `${match[1]}-${match[2]}-${match[3]}`;
    }
    return phoneNumber;
}

// Developed for
// Paresh Mali, Founder & MD — Kanephil Agritech

// Website Developed By
// Ankit Kushwaha — Freelance Developer

// Project Executed By
// Aurien Media
// Rohit Shah — Founder & CEO

// © All Rights Reserved by Aurien Media & Kanephil Agritech Pvt. Ltd.

// ============================================
// Add loading state to buttons
// ============================================
function setButtonLoading(buttonId, isLoading) {
    const button = document.getElementById(buttonId);
    if (button) {
        if (isLoading) {
            button.disabled = true;
            button.dataset.originalText = button.textContent;
            button.textContent = 'Loading...';
        } else {
            button.disabled = false;
            button.textContent = button.dataset.originalText;
        }
    }
}