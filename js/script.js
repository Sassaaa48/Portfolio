// --- GLOBAL CONFIG & CORE CONSTANTS ---
const caseStudiesData = {
    'sajilo': {
        title: 'SAJILO — सजिलो',
        category: 'PRODUCT DESIGN / UI/UX',
        meta: 'Shopping made simple.',
        image: 'images/sajilo-hero.png',
        brief: 'A mobile-first e-commerce experience designed to make online shopping easier for Nepali users while helping local products and brands stand out.',
        customLayout: true,
        html: `
        <div class="sajilo-editorial-container">
            <!-- 1. HERO -->
            <section class="sajilo-section" style="padding-top: 0;">
                <span class="sajilo-section-tag">PRODUCT DESIGN / UI/UX</span>
                <h1 class="sajilo-section-title" style="font-size: clamp(40px, 8vw, 80px); margin-bottom: 8px;">SAJILO</h1>
                <h2 style="font-size: clamp(24px, 4vw, 42px); font-weight: 500; color: #27ae60; margin-bottom: 24px; font-family: 'Noto Sans Devanagari', sans-serif;">सजिलो</h2>
                <p class="sajilo-large-typography" style="margin: 0 0 32px 0;">Shopping made simple.</p>
                <p class="sajilo-editorial-paragraph" style="font-size: 19px; max-width: 800px; line-height: 1.6;">
                    A mobile-first e-commerce experience designed to make online shopping easier for Nepali users while helping local products and brands stand out.
                </p>

                <div class="sajilo-hero-image-container">
                    <img src="images/sajilo-hero.png" alt="Sajilo Mobile App Home" class="sajilo-hero-image">
                </div>

                <div class="sajilo-meta-grid">
                    <div class="sajilo-meta-item">
                        <h4>Role</h4>
                        <p>Product Designer</p>
                    </div>
                    <div class="sajilo-meta-item">
                        <h4>Type</h4>
                        <p>Personal / Concept</p>
                    </div>
                    <div class="sajilo-meta-item">
                        <h4>Platform</h4>
                        <p>Mobile App</p>
                    </div>
                    <div class="sajilo-meta-item">
                        <h4>Tools</h4>
                        <p>Figma</p>
                    </div>
                    <div class="sajilo-meta-item">
                        <h4>Research</h4>
                        <p>Competitor Research</p>
                    </div>
                    <div class="sajilo-meta-item">
                        <h4>Year</h4>
                        <p>2026</p>
                    </div>
                </div>
            </section>

            <!-- 2. PROJECT OVERVIEW -->
            <section class="sajilo-section">
                <div class="sajilo-section-title-wrapper">
                    <span class="sajilo-section-tag">01 / OVERVIEW</span>
                    <h3 class="sajilo-section-title">A simpler way to shop.</h3>
                </div>
                <p class="sajilo-editorial-paragraph">
                    Sajilo is a conceptual mobile e-commerce experience built around a simple idea: online shopping in Nepal should feel easier, while Nepali products should be easier to discover.
                </p>
                <p class="sajilo-editorial-paragraph">
                    Instead of competing with large marketplaces through product volume, Sajilo focuses on clarity, discovery and local relevance.
                </p>

                <div class="sajilo-keyword-grid">
                    <div class="sajilo-keyword-card">
                        <div class="sajilo-keyword-title">SIMPLE</div>
                        <p class="sajilo-keyword-desc">Reduce friction throughout product discovery and checkout.</p>
                    </div>
                    <div class="sajilo-keyword-card">
                        <div class="sajilo-keyword-title">LOCAL</div>
                        <p class="sajilo-keyword-desc">Give Nepali products and brands a visible place within the shopping experience.</p>
                    </div>
                    <div class="sajilo-keyword-card">
                        <div class="sajilo-keyword-title">TRUSTED</div>
                        <p class="sajilo-keyword-desc">Make important information such as reviews, delivery, payment and order status easy to understand.</p>
                    </div>
                </div>

                <!-- [DIAGRAM: PROJECT PRINCIPLES] -->
                <div class="sajilo-diagram-placeholder">
                    <div class="sajilo-diagram-title">Project Principles Integration</div>
                    <span class="sajilo-diagram-label">[DIAGRAM: PROJECT PRINCIPLES]</span>
                    <div class="sajilo-diagram-body-abstract">
                        <i class="fa-solid fa-layer-group sajilo-diagram-icon"></i>
                        <p class="sajilo-diagram-text">
                            <strong>Principle Synergy:</strong> This visual diagram highlights how Simplicity, Local Discovery, and Trust overlap to create a balanced user flow, ensuring a cohesive and intuitive e-commerce ecosystem.
                        </p>
                    </div>
                </div>
            </section>

            <!-- 3. THE PROBLEM -->
            <section class="sajilo-section">
                <div class="sajilo-section-title-wrapper">
                    <span class="sajilo-section-tag">02 / PROBLEM</span>
                    <h3 class="sajilo-section-title">Shopping should not feel complicated.</h3>
                </div>
                <p class="sajilo-editorial-paragraph">
                    While reviewing existing e-commerce experiences, I noticed an opportunity to explore a calmer and more focused shopping journey.
                </p>
                <p class="sajilo-editorial-paragraph">
                    Large marketplaces are built around scale and choice. That creates powerful shopping experiences, but it can also make the interface feel dense and make local products harder to discover.
                </p>

                <p class="sajilo-editorial-paragraph">This led to two core questions:</p>
                <div class="sajilo-large-typography">
                    "How might we make online shopping feel simpler?"
                </div>
                <div class="sajilo-large-typography" style="margin-top: 16px;">
                    "How might we give Nepali products a stronger presence within the shopping journey?"
                </div>
            </section>

            <!-- 4. THE OPPORTUNITY -->
            <section class="sajilo-section">
                <div class="sajilo-section-title-wrapper">
                    <span class="sajilo-section-tag">03 / OPPORTUNITY</span>
                    <h3 class="sajilo-section-title">Unlocking a calmer marketplace.</h3>
                </div>
                <div class="sajilo-large-typography" style="border-color: #27ae60; font-weight: 700;">
                    MAKE SHOPPING SIMPLE.<br>MAKE LOCAL DISCOVERY EASY.
                </div>
                <p class="sajilo-editorial-paragraph">
                    The opportunity was not to remove the richness of e-commerce, but to organize it around what users need at each step.
                </p>

                <div class="sajilo-keyword-grid">
                    <div class="sajilo-keyword-card">
                        <h4 style="font-size: 18px; margin-bottom: 12px; font-weight: 700; color: var(--text-primary);">DISCOVER</h4>
                        <p class="sajilo-keyword-desc">Help users find products without unnecessary friction.</p>
                    </div>
                    <div class="sajilo-keyword-card">
                        <h4 style="font-size: 18px; margin-bottom: 12px; font-weight: 700; color: var(--text-primary);">DECIDE</h4>
                        <p class="sajilo-keyword-desc">Make important product information easy to scan and compare.</p>
                    </div>
                    <div class="sajilo-keyword-card">
                        <h4 style="font-size: 18px; margin-bottom: 12px; font-weight: 700; color: var(--text-primary);">CONNECT</h4>
                        <p class="sajilo-keyword-desc">Make local brands and Nepali products part of the main experience.</p>
                    </div>
                </div>

                <!-- [DIAGRAM: PROBLEM → OPPORTUNITY] -->
                <div class="sajilo-diagram-placeholder">
                    <div class="sajilo-diagram-title">Problem To Opportunity Matrix</div>
                    <span class="sajilo-diagram-label">[DIAGRAM: PROBLEM → OPPORTUNITY]</span>
                    <div class="sajilo-diagram-body-abstract">
                        <i class="fa-solid fa-arrows-split-up-and-left sajilo-diagram-icon"></i>
                        <p class="sajilo-diagram-text">
                            <strong>Strategic Translation:</strong> Visually charts how identified friction points (e.g., visual density, hidden local products, complex checkouts) map directly onto functional interface opportunities.
                        </p>
                    </div>
                </div>
            </section>

            <!-- 5. COMPETITOR RESEARCH -->
            <section class="sajilo-section">
                <div class="sajilo-section-title-wrapper">
                    <span class="sajilo-section-tag">04 / COMPETITOR RESEARCH</span>
                    <h3 class="sajilo-section-title">Looking at what already exists.</h3>
                </div>
                <p class="sajilo-editorial-paragraph">
                    I reviewed existing e-commerce platforms to understand common patterns around product discovery, navigation, product information, checkout and local shopping experiences.
                </p>
                <p class="sajilo-editorial-paragraph" style="font-weight: 600; color: var(--text-primary);">The competitors considered were:</p>

                <div class="sajilo-keyword-grid" style="margin-bottom: 40px;">
                    <div class="sajilo-keyword-card" style="border-left: 4px solid #f39c12;">
                        <h4 style="font-weight:800; font-size:18px; margin-bottom:12px; color:var(--text-primary);">DARAZ</h4>
                        <p class="sajilo-keyword-desc">Dense homepage layout, complex search filter system, but offers broad localized payment solutions in Nepal.</p>
                    </div>
                    <div class="sajilo-keyword-card" style="border-left: 4px solid #3498db;">
                        <h4 style="font-weight:800; font-size:18px; margin-bottom:12px; color:var(--text-primary);">JEEVEE</h4>
                        <p class="sajilo-keyword-desc">Health and beauty focus, cleaner categorization, but limited scope for general and local multi-category product discovery.</p>
                    </div>
                    <div class="sajilo-keyword-card" style="border-left: 4px solid #111111;">
                        <h4 style="font-weight:800; font-size:18px; margin-bottom:12px; color:var(--text-primary);">AMAZON</h4>
                        <p class="sajilo-keyword-desc">Extremely optimized search, high density of specifications and reviews, but lacks localized delivery or native payment context for Nepal.</p>
                    </div>
                </div>

                <!-- [DIAGRAM: COMPETITOR ANALYSIS] -->
                <div class="sajilo-diagram-placeholder">
                    <div class="sajilo-diagram-title">Competitor Comparison Analysis Grid</div>
                    <span class="sajilo-diagram-label">[DIAGRAM: COMPETITOR ANALYSIS]</span>
                    <div class="sajilo-diagram-body-abstract">
                        <i class="fa-solid fa-table-list sajilo-diagram-icon"></i>
                        <p class="sajilo-diagram-text">
                            <strong>Feature Evaluation Matrix:</strong> Maps Daraz, Jeevee, and Amazon across dimensions like: product discovery, navigation, specifications clarity, checkout speed, local payment native options, and local product visibility.
                        </p>
                    </div>
                </div>

                <div class="sajilo-editorial-block" data-number="💡" style="margin-top: 32px;">
                    <h4 style="font-weight:700; font-size:16px; margin-bottom:8px; color:var(--text-primary);">Key Research Insight</h4>
                    <p class="sajilo-keyword-desc">
                        The research helped me identify an opportunity to create a marketplace experience that feels extensive without feeling overwhelming, while giving Nepali products a more intentional place within discovery.
                    </p>
                </div>
            </section>

            <!-- 6. DESIGN GOALS -->
            <section class="sajilo-section">
                <div class="sajilo-section-title-wrapper">
                    <span class="sajilo-section-tag">05 / DESIGN GOALS</span>
                    <h3 class="sajilo-section-title">Designing around three principles.</h3>
                </div>

                <div class="sajilo-text-columns-2">
                    <div class="sajilo-editorial-block" data-number="01">
                        <h4 style="font-weight: 800; font-size: 18px; color: #27ae60; margin-bottom: 12px;">SIMPLICITY</h4>
                        <p class="sajilo-keyword-desc" style="font-size: 14px;">Keep the core journey easy to understand. Eliminate visual clutter and ensure layout paths are highly predictable.</p>
                    </div>
                    <div class="sajilo-editorial-block" data-number="02">
                        <h4 style="font-weight: 800; font-size: 18px; color: #27ae60; margin-bottom: 12px;">DISCOVERY</h4>
                        <p class="sajilo-keyword-desc" style="font-size: 14px;">Help users browse, search and discover products naturally. Build fluid categorical pathways that guide interest.</p>
                    </div>
                </div>
                <div class="sajilo-editorial-block" data-number="03" style="margin-top: 30px;">
                    <h4 style="font-weight: 800; font-size: 18px; color: #27ae60; margin-bottom: 12px;">LOCAL RELEVANCE</h4>
                    <p class="sajilo-keyword-desc" style="font-size: 14px;">Make Nepali products, brands and local shopping needs visible throughout the experience. Give local craftsmanship the platform it deserves.</p>
                </div>
            </section>

            <!-- 7. TARGET USER / DESIGN PERSONA -->
            <section class="sajilo-section">
                <div class="sajilo-section-title-wrapper">
                    <span class="sajilo-section-tag">06 / TARGET AUDIENCE</span>
                    <h3 class="sajilo-section-title">Design Persona</h3>
                </div>
                <p class="sajilo-editorial-paragraph">
                    To keep design decisions grounded, I mapped a comprehensive persona representing the target demographic.
                </p>

                <div class="sajilo-editorial-block" data-number="👤" style="padding: 40px 30px; background-color: var(--bg-surface);">
                    <div style="display: flex; gap: 24px; align-items: center; margin-bottom: 24px; flex-wrap: wrap;">
                        <div style="width: 72px; height: 72px; border-radius: 50%; background-color: rgba(39, 174, 96, 0.1); display: flex; align-items: center; justify-content: center; font-size: 32px; color: #27ae60; border: 2px solid #27ae60;">
                            A
                        </div>
                        <div>
                            <h4 style="font-size: 22px; font-weight: 800; color: var(--text-primary); margin: 0;">Anisha</h4>
                            <p style="font-size: 14px; color: var(--text-muted); margin: 4px 0 0 0;">Age: 22 &middot; Location: Kathmandu</p>
                        </div>
                    </div>

                    <p style="font-size: 15px; font-style: italic; color: var(--text-secondary); margin-bottom: 24px; border-left: 2px solid #27ae60; padding-left: 16px;">
                        "A digitally comfortable young shopper who frequently purchases fashion, beauty, stationery, gifts and everyday products online."
                    </p>

                    <div class="sajilo-text-columns-2" style="margin-top: 0; gap: 30px;">
                        <div>
                            <h5 style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.1em; color: #27ae60; margin-bottom: 12px; font-weight: 700;">Goals</h5>
                            <ul style="margin-left: 20px; font-size: 14px; color: var(--text-secondary); padding: 0;">
                                <li style="margin-bottom: 8px;">Find products quickly without sorting through spam listings.</li>
                                <li style="margin-bottom: 8px;">Compare different products and pricing models easily.</li>
                                <li style="margin-bottom: 8px;">Clear understanding of final landing costs (including shipping).</li>
                                <li style="margin-bottom: 8px;">Establish secure trust in seller reviews and ratings.</li>
                                <li style="margin-bottom: 8px;">Discover interesting local Nepali goods and local boutique brands.</li>
                            </ul>
                        </div>
                        <div>
                            <h5 style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.1em; color: #e74c3c; margin-bottom: 12px; font-weight: 700;">Frustrations</h5>
                            <ul style="margin-left: 20px; font-size: 14px; color: var(--text-secondary); padding: 0;">
                                <li style="margin-bottom: 8px;">Too many repetitive, low-quality, or duplicate product listings.</li>
                                <li style="margin-bottom: 8px;">Dense, cluttered shopping interfaces that cause visual fatigue.</li>
                                <li style="margin-bottom: 8px;">Vital information (shipping fees, sizes) buried or difficult to scan.</li>
                                <li style="margin-bottom: 8px;">Vague delivery timelines or unexpected extra delivery fees.</li>
                                <li style="margin-bottom: 8px;">Local boutique brands are hidden deep within category layers.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <p style="font-size: 11px; color: var(--text-muted); font-style: italic; margin-top: 16px; text-align: right;">
                    * Created as a design persona based on the project's target audience, not from primary user interviews.
                </p>
            </section>

            <!-- 8. USER JOURNEY -->
            <section class="sajilo-section">
                <div class="sajilo-section-title-wrapper">
                    <span class="sajilo-section-tag">07 / USER JOURNEY</span>
                    <h3 class="sajilo-section-title">Mapping the path of discovery.</h3>
                </div>
                <p class="sajilo-editorial-paragraph">
                    Understanding Anisha's mental steps allows us to anticipate needs, reduce redundant clicks, and serve highly relevant information exactly when required.
                </p>

                <div class="sajilo-sequence-grid">
                    <div class="sajilo-sequence-step">
                        <div class="sajilo-sequence-number">01 / DISCOVER</div>
                        <div class="sajilo-sequence-title">Discover</div>
                        <p class="sajilo-sequence-desc">Browses homepage, exploring featured categories and custom 'Made in Nepal' carousels.</p>
                    </div>
                    <div class="sajilo-sequence-step">
                        <div class="sajilo-sequence-number">02 / EXPLORE</div>
                        <div class="sajilo-sequence-title">Explore</div>
                        <p class="sajilo-sequence-desc">Executes clean searches and refines category grids with clear layout sorting options.</p>
                    </div>
                    <div class="sajilo-sequence-step">
                        <div class="sajilo-sequence-number">03 / EVALUATE</div>
                        <div class="sajilo-sequence-title">Evaluate</div>
                        <p class="sajilo-sequence-desc">Scans clean product details, verified ratings, material sourcing, and delivery fees.</p>
                    </div>
                    <div class="sajilo-sequence-step">
                        <div class="sajilo-sequence-number">04 / PURCHASE</div>
                        <div class="sajilo-sequence-title">Purchase</div>
                        <p class="sajilo-sequence-desc">Finalizes secure checkout with localized payment methods (eSewa, Khalti, COD).</p>
                    </div>
                    <div class="sajilo-sequence-step">
                        <div class="sajilo-sequence-number">05 / REASSURE</div>
                        <div class="sajilo-sequence-title">Reassure</div>
                        <p class="sajilo-sequence-desc">Receives clean receipts and tracks delivery transit in real-time.</p>
                    </div>
                </div>

                <!-- [DIAGRAM: USER JOURNEY] -->
                <div class="sajilo-diagram-placeholder">
                    <div class="sajilo-diagram-title">Horizontal User Journey Mapping</div>
                    <span class="sajilo-diagram-label">[DIAGRAM: USER JOURNEY]</span>
                    <div class="sajilo-diagram-body-abstract">
                        <i class="fa-solid fa-route sajilo-diagram-icon"></i>
                        <p class="sajilo-diagram-text">
                            <strong>Journey Architecture:</strong> Charts user thoughts, actions, pain points, and specific design opportunities across each of the 5 chronological shopping phases.
                        </p>
                    </div>
                </div>
            </section>

            <!-- 9. INFORMATION ARCHITECTURE -->
            <section class="sajilo-section">
                <div class="sajilo-section-title-wrapper">
                    <span class="sajilo-section-tag">08 / INFORMATION ARCHITECTURE</span>
                    <h3 class="sajilo-section-title">Structuring simple pathways.</h3>
                </div>
                <p class="sajilo-editorial-paragraph">
                    A flat, logical categorization system ensures users never feel lost, providing instant navigation access to primary sections.
                </p>

                <div class="sajilo-editorial-block" data-number="📁" style="padding: 40px; background-color: var(--bg-surface);">
                    <h4 style="font-weight: 800; font-size: 20px; color: #27ae60; margin-bottom: 24px; font-family: 'Poppins', sans-serif;">SAJILO NAVIGATION MAP</h4>

                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 24px;">
                        <div>
                            <h5 style="font-weight:700; font-size:14px; margin-bottom:8px; color:var(--text-primary);"><i class="fa-solid fa-house" style="color: #27ae60; margin-right:6px;"></i> HOME</h5>
                            <ul style="list-style-type:none; margin:0; padding:0; font-size:13px; color:var(--text-secondary);">
                                <li style="margin-bottom:6px;">&middot; Categories Grid</li>
                                <li style="margin-bottom:6px;">&middot; Featured Products</li>
                                <li style="margin-bottom:6px;">&middot; Made in Nepal</li>
                                <li style="margin-bottom:6px;">&middot; Deals / Sales</li>
                            </ul>
                        </div>
                        <div>
                            <h5 style="font-weight:700; font-size:14px; margin-bottom:8px; color:var(--text-primary);"><i class="fa-solid fa-grip" style="color: #27ae60; margin-right:6px;"></i> CATEGORIES</h5>
                            <ul style="list-style-type:none; margin:0; padding:0; font-size:13px; color:var(--text-secondary);">
                                <li style="margin-bottom:6px;">&middot; Fashion & Apparel</li>
                                <li style="margin-bottom:6px;">&middot; Food & Beverages</li>
                                <li style="margin-bottom:6px;">&middot; Home & Living</li>
                                <li style="margin-bottom:6px;">&middot; Beauty & Wellness</li>
                                <li style="margin-bottom:6px;">&middot; Stationery & Gifts</li>
                            </ul>
                        </div>
                        <div>
                            <h5 style="font-weight:700; font-size:14px; margin-bottom:8px; color:var(--text-primary);"><i class="fa-solid fa-heart" style="color: #27ae60; margin-right:6px;"></i> WISHLIST</h5>
                            <ul style="list-style-type:none; margin:0; padding:0; font-size:13px; color:var(--text-secondary);">
                                <li style="margin-bottom:6px;">&middot; Saved Items</li>
                                <li style="margin-bottom:6px;">&middot; Custom Folders</li>
                            </ul>
                        </div>
                        <div>
                            <h5 style="font-weight:700; font-size:14px; margin-bottom:8px; color:var(--text-primary);"><i class="fa-solid fa-user" style="color: #27ae60; margin-right:6px;"></i> ACCOUNT</h5>
                            <ul style="list-style-type:none; margin:0; padding:0; font-size:13px; color:var(--text-secondary);">
                                <li style="margin-bottom:6px;">&middot; Order Tracking</li>
                                <li style="margin-bottom:6px;">&middot; Saved Addresses</li>
                                <li style="margin-bottom:6px;">&middot; Local Payment Methods</li>
                                <li style="margin-bottom:6px;">&middot; Multi-Language Selector</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- [DIAGRAM: INFORMATION ARCHITECTURE] -->
                <div class="sajilo-diagram-placeholder">
                    <div class="sajilo-diagram-title">Information Architecture Hierarchy</div>
                    <span class="sajilo-diagram-label">[DIAGRAM: INFORMATION ARCHITECTURE]</span>
                    <div class="sajilo-diagram-body-abstract">
                        <i class="fa-solid fa-sitemap sajilo-diagram-icon"></i>
                        <p class="sajilo-diagram-text">
                            <strong>System Taxonomy Diagram:</strong> A clean visual representation mapping out the nested levels, categories, navigation systems, and profile configurations.
                        </p>
                    </div>
                </div>
            </section>

            <!-- 10. CORE USER FLOW -->
            <section class="sajilo-section">
                <div class="sajilo-section-title-wrapper">
                    <span class="sajilo-section-tag">09 / USER FLOW</span>
                    <h3 class="sajilo-section-title">From discovery to delivery.</h3>
                </div>
                <p class="sajilo-editorial-paragraph">
                    The core flow was intentionally kept linear. Each stage gives users the information needed for the next decision instead of introducing unnecessary complexity.
                </p>

                <!-- [DIAGRAM: CORE SHOPPING FLOW] -->
                <div class="sajilo-diagram-placeholder">
                    <div class="sajilo-diagram-title">Core Shopping Action Flow</div>
                    <span class="sajilo-diagram-label">[DIAGRAM: CORE SHOPPING FLOW]</span>
                    <div class="sajilo-diagram-body-abstract">
                        <i class="fa-solid fa-arrow-progress sajilo-diagram-icon"></i>
                        <p class="sajilo-diagram-text">
                            <strong>Action Flowchart:</strong> Tracks the precise screens and decision nodes from the main Homepage, listing filters, product specs, cart operations, checkout stages, to order success.
                        </p>
                    </div>
                </div>
            </section>

            <!-- 11. DESIGN DIRECTION -->
            <section class="sajilo-section">
                <div class="sajilo-section-title-wrapper">
                    <span class="sajilo-section-tag">10 / DESIGN DIRECTION</span>
                    <h3 class="sajilo-section-title">Making "Sajilo" feel like Sajilo.</h3>
                </div>
                <p class="sajilo-editorial-paragraph">
                    The name itself means easy/simple in Nepali, and it became our guiding design principle at every turn.
                </p>
                <div class="sajilo-large-typography">
                    "If shopping is Sajilo, the interface should be too."
                </div>
                <p class="sajilo-editorial-paragraph">
                    The visual direction combines a calm palette, generous spacing, clear hierarchy and familiar e-commerce patterns. The goal was not to make the interface minimal for the sake of minimalism, but to make important information easier to find.
                </p>
            </section>

            <!-- 12. BRAND & VISUAL IDENTITY -->
            <section class="sajilo-section">
                <div class="sajilo-section-title-wrapper">
                    <span class="sajilo-section-tag">11 / BRAND & IDENTITY</span>
                    <h3 class="sajilo-section-title">Brand & Visual Identity</h3>
                </div>
                <p class="sajilo-editorial-paragraph">
                    The visual identity uses green as the primary brand color to communicate freshness, trust and a connection to local products.
                </p>

                <div class="sajilo-editorial-block" data-number="🟢" style="margin-bottom: 40px; padding: 40px 30px;">
                    <div style="display: flex; flex-direction: column; gap: 4px; margin-bottom: 24px;">
                        <h4 style="font-size: 26px; font-weight: 800; color: #27ae60; margin: 0; letter-spacing: 0.05em;">SAJILO &middot; सजिलो</h4>
                        <p style="font-size: 13px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-muted); margin: 0;">Shopping made simple.</p>
                    </div>

                    <h5 style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-muted); margin-bottom: 16px; font-weight: 700;">Brand Color Palette</h5>
                    <div class="sajilo-palette-container">
                        <div class="sajilo-color-swatch">
                            <div class="sajilo-color-preview" style="background-color: #1b4d3e;"></div>
                            <div class="sajilo-color-info">
                                <div class="sajilo-color-name">Forest Green</div>
                                <div class="sajilo-color-hex">#1B4D3E</div>
                            </div>
                        </div>
                        <div class="sajilo-color-swatch">
                            <div class="sajilo-color-preview" style="background-color: #27ae60;"></div>
                            <div class="sajilo-color-info">
                                <div class="sajilo-color-name">Sage Green</div>
                                <div class="sajilo-color-hex">#27AE60</div>
                            </div>
                        </div>
                        <div class="sajilo-color-swatch">
                            <div class="sajilo-color-preview" style="background-color: #a3e4d7;"></div>
                            <div class="sajilo-color-info">
                                <div class="sajilo-color-name">Soft Mint</div>
                                <div class="sajilo-color-hex">#A3E4D7</div>
                            </div>
                        </div>
                        <div class="sajilo-color-swatch">
                            <div class="sajilo-color-preview" style="background-color: #fbf9f6;"></div>
                            <div class="sajilo-color-info">
                                <div class="sajilo-color-name">Warm Cream</div>
                                <div class="sajilo-color-hex">#FBF9F6</div>
                            </div>
                        </div>
                        <div class="sajilo-color-swatch">
                            <div class="sajilo-color-preview" style="background-color: #2c3e50;"></div>
                            <div class="sajilo-color-info">
                                <div class="sajilo-color-name">Charcoal</div>
                                <div class="sajilo-color-hex">#2C3E50</div>
                            </div>
                        </div>
                    </div>

                    <h5 style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-muted); margin-top: 32px; margin-bottom: 16px; font-weight: 700;">Typography System</h5>
                    <div class="sajilo-type-showcase">
                        <div class="sajilo-type-item">
                            <h5>Primary Sans Type</h5>
                            <div class="sajilo-type-large">Poppins</div>
                            <div class="sajilo-type-sample">Used for editorial headings, metadata tags, numeric callouts, and clean buttons. Bold, geometric, and modern.</div>
                        </div>
                        <div class="sajilo-type-item">
                            <h5>Secondary Devanagari Type</h5>
                            <div class="sajilo-type-large" style="font-family: 'Noto Sans Devanagari', sans-serif; font-weight: 500;">सजिलो</div>
                            <div class="sajilo-type-sample">Noto Sans Devanagari is utilized to maintain beautiful, legible, and organic representation of Nepali native script.</div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- 13. HOMEPAGE -->
            <section class="sajilo-section">
                <div class="sajilo-section-title-wrapper">
                    <span class="sajilo-section-tag">12 / HOMEPAGE</span>
                    <h3 class="sajilo-section-title">Designing the first impression.</h3>
                </div>
                <p class="sajilo-editorial-paragraph">
                    The homepage acts as a gateway, designed to welcome the user without the overwhelming visual noise found in typical e-commerce solutions.
                </p>

                <div class="sajilo-ui-grid-2">
                    <div class="sajilo-screenshot-wrapper">
                        <img src="images/sajilo-hero.png" alt="Sajilo Home View Screen">
                    </div>

                    <div>
                        <p class="sajilo-editorial-paragraph" style="font-size: 16px; margin-bottom: 24px;">
                            The homepage was designed around three primary entry points:
                        </p>
                        <ul style="margin-left: 20px; font-size: 15px; color: var(--text-secondary); margin-bottom: 32px;">
                            <li style="margin-bottom: 8px;"><strong>SEARCH:</strong> Prominent, clean accessibility to find something specific instantly.</li>
                            <li style="margin-bottom: 8px;"><strong>BROWSE:</strong> Logical, grid-aligned shortcuts for clear category transitions.</li>
                            <li style="margin-bottom: 8px;"><strong>DISCOVER:</strong> Focused carousels highlighting local boutique brands, deals, and collections.</li>
                        </ul>

                        <h5 style="font-size: 13px; text-transform: uppercase; color: var(--text-muted); letter-spacing: 0.1em; margin-bottom: 16px; font-weight: 700;">Design Decisions:</h5>
                        <div class="sajilo-callout-list">
                            <div class="sajilo-callout-item">
                                <div class="sajilo-callout-number">1</div>
                                <div class="sajilo-callout-content">
                                    <h4>Prominent Search Utility</h4>
                                    <p>An omnipresent search bar with dynamic auto-suggestions reduces navigation steps.</p>
                                </div>
                            </div>
                            <div class="sajilo-callout-item">
                                <div class="sajilo-callout-number">2</div>
                                <div class="sajilo-callout-content">
                                    <h4>Clean Category Grid</h4>
                                    <p>Generous icon sizing allows fingers of all sizes to tap-browse categories rapidly.</p>
                                </div>
                            </div>
                            <div class="sajilo-callout-item">
                                <div class="sajilo-callout-number">3</div>
                                <div class="sajilo-callout-content">
                                    <h4>Made in Nepal Spotlight</h4>
                                    <p>A designated visual block showcasing hand-selected local products on the main feed.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- 14. PRODUCT DISCOVERY -->
            <section class="sajilo-section">
                <div class="sajilo-section-title-wrapper">
                    <span class="sajilo-section-tag">13 / DISCOVERY</span>
                    <h3 class="sajilo-section-title">Helping users narrow the choice.</h3>
                </div>
                <p class="sajilo-editorial-paragraph">
                    Product cards and category lists prioritize readability and visual cleanliness, allowing essential criteria to be compared instantly from the listing grid.
                </p>

                <div class="sajilo-ui-grid-2">
                    <div>
                        <p class="sajilo-editorial-paragraph" style="font-size: 16px; margin-bottom: 24px;">
                            To reduce cognitive overhead, product grids utilize card structures that present clear criteria at a glance:
                        </p>

                        <div class="sajilo-callout-list" style="gap: 16px;">
                            <div class="sajilo-callout-item">
                                <div class="sajilo-callout-number"><i class="fa-solid fa-check" style="font-size: 10px;"></i></div>
                                <div class="sajilo-callout-content">
                                    <p><strong>Aspect Ratios:</strong> Standard portrait aspect ratios highlight details beautifully.</p>
                                </div>
                            </div>
                            <div class="sajilo-callout-item">
                                <div class="sajilo-callout-number"><i class="fa-solid fa-check" style="font-size: 10px;"></i></div>
                                <div class="sajilo-callout-content">
                                    <p><strong>Seller Metadata:</strong> Specific branding or local source labels sit right on the listing header.</p>
                                </div>
                            </div>
                            <div class="sajilo-callout-item">
                                <div class="sajilo-callout-number"><i class="fa-solid fa-check" style="font-size: 10px;"></i></div>
                                <div class="sajilo-callout-content">
                                    <p><strong>Price & Discounts:</strong> Bold NPR listings with clear markdown indicators.</p>
                                </div>
                            </div>
                            <div class="sajilo-callout-item">
                                <div class="sajilo-callout-number"><i class="fa-solid fa-check" style="font-size: 10px;"></i></div>
                                <div class="sajilo-callout-content">
                                    <p><strong>Ratings & Cart Integration:</strong> Star counts and rapid cart action targets are kept clean.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="sajilo-screenshot-wrapper">
                        <!-- Custom Component Preview showing a beautiful product card -->
                        <div class="sajilo-system-card" style="width: 100%; max-width: 320px; background-color: var(--bg-surface);">
                            <div style="position: relative; border-radius: 8px; overflow: hidden; background-color: var(--bg-surface-elevated); height: 260px; margin-bottom: 16px; display: flex; align-items: center; justify-content: center;">
                                <i class="fa-solid fa-shirt" style="font-size: 80px; color: #1b4d3e; opacity: 0.15;"></i>
                                <span class="sajilo-ui-badge-nepal" style="position: absolute; top: 12px; left: 12px; font-size: 10px;">MADE IN NEPAL</span>
                                <button style="position: absolute; top: 12px; right: 12px; border: none; background: #ffffff; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 10px rgba(0,0,0,0.1); color: #e74c3c;"><i class="fa-solid fa-heart"></i></button>
                            </div>
                            <span style="font-size: 12px; color: var(--text-muted); font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">KATHMANDU APPAREL</span>
                            <h4 style="font-size: 16px; font-weight: 700; margin: 4px 0 8px 0; color: var(--text-primary);">Organic Hemp Summer Jacket</h4>
                            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px;">
                                <span style="font-size: 13px; color: #f39c12; font-weight: 700;"><i class="fa-solid fa-star"></i> 4.8</span>
                                <span style="font-size: 12px; color: var(--text-muted);">(42 reviews)</span>
                            </div>
                            <div style="display: flex; justify-content: space-between; align-items: center;">
                                <div>
                                    <span style="font-size: 18px; font-weight: 800; color: #27ae60;">NPR 4,500</span>
                                    <span style="font-size: 12px; color: var(--text-muted); text-decoration: line-through; margin-left: 6px;">NPR 5,200</span>
                                </div>
                                <button style="background-color: #27ae60; border: none; width: 36px; height: 36px; border-radius: 8px; color: #ffffff; display: flex; align-items: center; justify-content: center; font-size: 16px;"><i class="fa-solid fa-cart-plus"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- 15. PRODUCT DETAILS -->
            <section class="sajilo-section">
                <div class="sajilo-section-title-wrapper">
                    <span class="sajilo-section-tag">14 / PRODUCT DETAILS</span>
                    <h3 class="sajilo-section-title">From browsing to confidence.</h3>
                </div>
                <p class="sajilo-editorial-paragraph">
                    The product page is where the user moves from exploring to deciding. Important information is grouped around the product image and purchase action.
                </p>

                <div class="sajilo-ui-grid-2">
                    <div class="sajilo-screenshot-wrapper" style="background-color: var(--bg-surface-elevated); padding: 40px;">
                        <div style="text-align: center; color: var(--text-secondary);">
                            <i class="fa-solid fa-mug-saucer" style="font-size: 100px; color: #27ae60; opacity: 0.1; margin-bottom: 20px;"></i>
                            <h4 style="font-weight:700; margin-bottom: 8px; color:var(--text-primary);">Handmade Dhaka Ceramic Set</h4>
                            <p style="font-size:13px; max-width:300px; margin: 0 auto;">High-fidelity rendering spotlighting traditional patterns, artisan materials, shipping terms, and rapid checkout integration.</p>
                        </div>
                    </div>

                    <div>
                        <p class="sajilo-editorial-paragraph" style="font-size: 16px;">
                            Instead of scattering specs across multiple collapsible sections, vital product metadata is logically ordered:
                        </p>

                        <div class="sajilo-callout-list" style="margin-top: 24px;">
                            <div class="sajilo-callout-item">
                                <div class="sajilo-callout-number">1</div>
                                <div class="sajilo-callout-content">
                                    <h4>Dynamic Variant Selectors</h4>
                                    <p>Sizing, colors, or pattern swatches are designed with tactile circular targets to reduce errors.</p>
                                </div>
                            </div>
                            <div class="sajilo-callout-item">
                                <div class="sajilo-callout-number">2</div>
                                <div class="sajilo-callout-content">
                                    <h4>Local Sourcing Specifications</h4>
                                    <p>Identifies geographical raw material sourcing (e.g. handmade in Bhaktapur) to foster cultural authenticity.</p>
                                </div>
                            </div>
                            <div class="sajilo-callout-item">
                                <div class="sajilo-callout-number">3</div>
                                <div class="sajilo-callout-content">
                                    <h4>Guaranteed Shipping Schedules</h4>
                                    <p>Displays unambiguous shipping fee and delivery timeframe projections relative to Kathmandu valley boundaries.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- 16. LOCAL PRODUCT DISCOVERY -->
            <section class="sajilo-section">
                <div class="sajilo-section-title-wrapper">
                    <span class="sajilo-section-tag">15 / LOCAL DISCOVERY</span>
                    <h3 class="sajilo-section-title">Putting local products in the spotlight.</h3>
                </div>
                <p class="sajilo-editorial-paragraph">
                    Sajilo's main differentiator is its focus on Nepali products and local brands.
                </p>
                <p class="sajilo-editorial-paragraph">
                    Instead of treating local products as another filter inside a marketplace, the experience gives them dedicated visibility through areas such as "Made in Nepal" and local brand discovery.
                </p>

                <div class="sajilo-large-typography" style="border-left-width: 6px; font-weight: 800; text-transform: uppercase;">
                    LOCAL SHOULD FEEL LIKE A FEATURE, NOT A FILTER.
                </div>

                <div class="sajilo-editorial-block" data-number="🇳🇵" style="margin-top: 40px; background-color: rgba(39, 174, 96, 0.03); border-color: rgba(39, 174, 96, 0.2);">
                    <h4 style="font-size: 18px; font-weight: 800; color: #27ae60; margin-bottom: 12px;">Supporting the Local Economy</h4>
                    <p class="sajilo-keyword-desc" style="font-size: 15px; line-height: 1.6;">
                        By integrating dedicated brand pages, stories about local artisans, and geographical sourcing flags directly into standard browse nodes, we build high-level consumer awareness and drive economic conversion directly to local craft collectives.
                    </p>
                </div>
            </section>

            <!-- 17. CART & CHECKOUT -->
            <section class="sajilo-section">
                <div class="sajilo-section-title-wrapper">
                    <span class="sajilo-section-tag">16 / CHECKOUT SYSTEM</span>
                    <h3 class="sajilo-section-title">Keeping the final steps simple.</h3>
                </div>
                <p class="sajilo-editorial-paragraph">
                    Checkout was structured into clear stages so users can understand what they are buying, where it is going, how they are paying, and how much they will pay.
                </p>

                <div class="sajilo-sequence-grid" style="margin-bottom: 40px;">
                    <div class="sajilo-sequence-step">
                        <div class="sajilo-sequence-number">STAGE 1</div>
                        <div class="sajilo-sequence-title">Cart Review</div>
                        <p class="sajilo-sequence-desc">Clear quantites, simple deletions, item summaries.</p>
                    </div>
                    <div class="sajilo-sequence-step">
                        <div class="sajilo-sequence-number">STAGE 2</div>
                        <div class="sajilo-sequence-title">Delivery Info</div>
                        <p class="sajilo-sequence-desc">Saved address listings, visual map points, local pinpoints.</p>
                    </div>
                    <div class="sajilo-sequence-step">
                        <div class="sajilo-sequence-number">STAGE 3</div>
                        <div class="sajilo-sequence-title">Payment Choice</div>
                        <p class="sajilo-sequence-desc">Secure transitions supporting COD, eSewa, and Khalti.</p>
                    </div>
                    <div class="sajilo-sequence-step">
                        <div class="sajilo-sequence-number">STAGE 4</div>
                        <div class="sajilo-sequence-title">Final Review</div>
                        <p class="sajilo-sequence-desc">All taxes, delivery charges, and final landing totals.</p>
                    </div>
                    <div class="sajilo-sequence-step">
                        <div class="sajilo-sequence-number">STAGE 5</div>
                        <div class="sajilo-sequence-title">Order Sent</div>
                        <p class="sajilo-sequence-desc">Polished invoice, instant tracking access.</p>
                    </div>
                </div>

                <div class="sajilo-text-columns-2" style="margin-top: 0; align-items: center;">
                    <div>
                        <h4 style="font-size: 18px; font-weight: 800; color: var(--text-primary); margin-bottom: 12px;">Local payment integration</h4>
                        <p class="sajilo-keyword-desc" style="font-size: 15px; line-height: 1.6;">
                            Rather than using global templates that default to standard international cards, Sajilo directly integrates with native payment interfaces. Local payment options are placed at the primary tier:
                        </p>
                        <ul style="margin-left: 20px; font-size: 14px; color: var(--text-secondary); margin-top: 16px;">
                            <li style="margin-bottom: 8px;"><strong>eSewa / Khalti:</strong> One-tap API triggers for instant digital reconciliation.</li>
                            <li style="margin-bottom: 8px;"><strong>Cash on Delivery (COD):</strong> Remains a highly trusted baseline for off-grid buyers.</li>
                            <li style="margin-bottom: 8px;"><strong>Local Debit/Credit Cards:</strong> Supporting SCT and major banking gateways.</li>
                        </ul>
                    </div>

                    <div class="sajilo-editorial-block" style="padding: 30px; background-color: var(--bg-surface-elevated);">
                        <h5 style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-muted); margin-bottom: 16px; font-weight: 700;">Local Payment Channels</h5>
                        <div style="display: flex; flex-direction: column; gap: 12px;">
                            <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: 8px;">
                                <span style="font-size: 14px; font-weight: 700;"><i class="fa-solid fa-wallet" style="color: #27ae60; margin-right: 8px;"></i> eSewa Mobile Wallet</span>
                                <span class="sajilo-ui-badge" style="background-color: rgba(39,174,96,0.1); color: #27ae60;">Native API</span>
                            </div>
                            <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: 8px;">
                                <span style="font-size: 14px; font-weight: 700;"><i class="fa-solid fa-wallet" style="color: #9b59b6; margin-right: 8px;"></i> Khalti Wallet</span>
                                <span class="sajilo-ui-badge" style="background-color: rgba(155,89,182,0.1); color: #9b59b6;">Native API</span>
                            </div>
                            <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: 8px;">
                                <span style="font-size: 14px; font-weight: 700;"><i class="fa-solid fa-truck" style="color: #e67e22; margin-right: 8px;"></i> Cash on Delivery (COD)</span>
                                <span class="sajilo-ui-badge" style="background-color: rgba(230,126,34,0.1); color: #e67e22;">Standard</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- 18. ORDER CONFIRMATION & TRACKING -->
            <section class="sajilo-section">
                <div class="sajilo-section-title-wrapper">
                    <span class="sajilo-section-tag">17 / TRACKING SYSTEM</span>
                    <h3 class="sajilo-section-title">The experience doesn't end at "Order placed."</h3>
                </div>
                <p class="sajilo-editorial-paragraph">
                    The confirmation screen provides reassurance by showing the order number, expected delivery and direct access to tracking.
                </p>

                <div class="sajilo-ui-grid-2">
                    <div class="sajilo-screenshot-wrapper">
                        <!-- Custom layout mockup representing a clean tracking view -->
                        <div class="sajilo-system-card" style="width: 100%; max-width: 320px; background-color: var(--bg-surface);">
                            <div style="text-align: center; margin-bottom: 24px;">
                                <div style="width: 50px; height: 50px; border-radius: 50%; background-color: rgba(39, 174, 96, 0.1); display: flex; align-items: center; justify-content: center; font-size: 24px; color: #27ae60; margin: 0 auto 12px auto;">
                                    <i class="fa-solid fa-circle-check"></i>
                                </div>
                                <h4 style="font-size:18px; font-weight:800; color:var(--text-primary); margin:0;">Order Confirmed!</h4>
                                <p style="font-size:12px; color:var(--text-muted); margin:4px 0 0 0;">Order ID: #SJ-88291</p>
                            </div>

                            <div style="border-top: 1px solid var(--border-color); padding-top: 16px;">
                                <h5 style="font-size:12px; text-transform:uppercase; color:var(--text-muted); margin-bottom:12px;">Delivery Progress</h5>
                                <div style="display:flex; flex-direction:column; gap:16px;">
                                    <div style="display:flex; gap:12px; align-items:center;">
                                        <div style="width:12px; height:12px; border-radius:50%; background-color:#27ae60; border: 3px solid rgba(39,174,96,0.2);"></div>
                                        <span style="font-size:13px; font-weight:700; color:var(--text-primary);">Order Received &amp; Approved</span>
                                    </div>
                                    <div style="display:flex; gap:12px; align-items:center;">
                                        <div style="width:12px; height:12px; border-radius:50%; background-color:#27ae60; border: 3px solid rgba(39,174,96,0.2);"></div>
                                        <span style="font-size:13px; font-weight:700; color:var(--text-primary);">Package Dispatched (Baneshwor Hub)</span>
                                    </div>
                                    <div style="display:flex; gap:12px; align-items:center; opacity:0.5;">
                                        <div style="width:12px; height:12px; border-radius:50%; background-color:var(--text-muted);"></div>
                                        <span style="font-size:13px; color:var(--text-secondary);">Out for Local Delivery</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <p class="sajilo-editorial-paragraph" style="font-size: 16px; margin-bottom: 24px;">
                            Closing the loop on user anxiety means building post-purchase certainty:
                        </p>
                        <div class="sajilo-callout-list">
                            <div class="sajilo-callout-item">
                                <div class="sajilo-callout-number"><i class="fa-solid fa-box"></i></div>
                                <div class="sajilo-callout-content">
                                    <h4>Dynamic Dispatch Logistics</h4>
                                    <p>Identifies precisely which hub is preparing the item, building physical connection with localized context.</p>
                                </div>
                            </div>
                            <div class="sajilo-callout-item">
                                <div class="sajilo-callout-number"><i class="fa-solid fa-phone"></i></div>
                                <div class="sajilo-callout-content">
                                    <h4>Artisan / Courier Channels</h4>
                                    <p>Provides single-click secure calling access to dispatchers, bridging communication during final-mile delivery.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- 19. EMPTY / ERROR / SUCCESS STATES -->
            <section class="sajilo-section">
                <div class="sajilo-section-title-wrapper">
                    <span class="sajilo-section-tag">18 / EDGE STATES</span>
                    <h3 class="sajilo-section-title">Designing beyond the happy path.</h3>
                </div>
                <p class="sajilo-editorial-paragraph">
                    A complete product experience needs to account for more than the ideal flow. Sajilo includes dedicated states for failed actions, successful actions and empty content so users are given a clear next step instead of reaching a dead end.
                </p>

                <div class="sajilo-states-grid">
                    <div class="sajilo-state-card">
                        <div class="sajilo-state-image-placeholder">
                            <i class="fa-solid fa-circle-exclamation sajilo-state-icon" style="color: #e74c3c;"></i>
                            <span style="font-size: 13px; font-weight: 700; color: #e74c3c;">ERROR STATE</span>
                        </div>
                        <h4>Something went wrong.</h4>
                        <p>Visual indicators highlight payment drops or connection loss, providing one-tap recovery actions.</p>
                    </div>
                    <div class="sajilo-state-card">
                        <div class="sajilo-state-image-placeholder">
                            <i class="fa-solid fa-circle-check sajilo-state-icon"></i>
                            <span style="font-size: 13px; font-weight: 700;">SUCCESS STATE</span>
                        </div>
                        <h4>Order placed successfully!</h4>
                        <p>Reassuring, festive animated confirmations confirming order number and dispatch hub.</p>
                    </div>
                    <div class="sajilo-state-card">
                        <div class="sajilo-state-image-placeholder">
                            <i class="fa-solid fa-heart-crack sajilo-state-icon" style="color: var(--text-muted);"></i>
                            <span style="font-size: 13px; font-weight: 700; color: var(--text-muted);">EMPTY STATE</span>
                        </div>
                        <h4>Your wishlist is empty.</h4>
                        <p>Instead of leaving a blank dead-end, Sajilo lists active categories to pull users back into search.</p>
                    </div>
                </div>
            </section>

            <!-- 20. DESIGN SYSTEM -->
            <section class="sajilo-section">
                <div class="sajilo-section-title-wrapper">
                    <span class="sajilo-section-tag">19 / DESIGN SYSTEM</span>
                    <h3 class="sajilo-section-title">Sajilo Component System</h3>
                </div>
                <p class="sajilo-editorial-paragraph">
                    To maintain development efficiency and design consistency across all screens, I curated a snapshot of the core design system components:
                </p>

                <div class="sajilo-system-grid">
                    <div class="sajilo-system-card">
                        <h5>Buttons & Swatches</h5>
                        <div class="sajilo-ui-buttons-preview">
                            <button class="sajilo-ui-btn-primary">Button_Primary.fig</button>
                            <button class="sajilo-ui-btn-secondary">Button_Outline.fig</button>
                        </div>
                    </div>
                    <div class="sajilo-system-card">
                        <h5>Form Elements</h5>
                        <div class="sajilo-ui-fields-preview">
                            <input type="text" class="sajilo-ui-input" placeholder="Search products..." readonly>
                            <input type="text" class="sajilo-ui-input" style="border-color: #27ae60;" value="Kathmandu, Nepal" readonly>
                        </div>
                    </div>
                    <div class="sajilo-system-card">
                        <h5>System Badges</h5>
                        <div class="sajilo-ui-badges-preview">
                            <span class="sajilo-ui-badge">ACTIVE STATE</span>
                            <span class="sajilo-ui-badge-nepal">MADE IN NEPAL</span>
                            <span class="sajilo-ui-badge" style="background-color:rgba(231,76,60,0.1); color:#e74c3c;">-25% OFF</span>
                        </div>
                    </div>
                    <div class="sajilo-system-card">
                        <h5>Standard Icons</h5>
                        <div style="display: flex; gap: 16px; font-size: 20px; color: #27ae60; flex-wrap: wrap; justify-content: center; padding-top: 10px;">
                            <i class="fa-solid fa-house"></i>
                            <i class="fa-solid fa-magnifying-glass"></i>
                            <i class="fa-solid fa-bag-shopping"></i>
                            <i class="fa-solid fa-user"></i>
                            <i class="fa-solid fa-heart"></i>
                        </div>
                    </div>
                </div>
            </section>

            <!-- 21. FINAL EXPERIENCE -->
            <section class="sajilo-section">
                <div class="sajilo-section-title-wrapper">
                    <span class="sajilo-section-tag">20 / COHESIVE EXPERIENCE</span>
                    <h3 class="sajilo-section-title">A marketplace designed around clarity.</h3>
                </div>
                <p class="sajilo-editorial-paragraph">
                    Sajilo brings product discovery, local brands and a streamlined shopping journey into one mobile experience.
                </p>

                <div class="sajilo-collage-grid">
                    <div class="sajilo-collage-item sajilo-collage-item-large">
                        <img src="images/sajilo-hero.png" alt="Sajilo App Core Interface">
                        <div class="sajilo-collage-caption">Sajilo App Main Discovery Screen</div>
                    </div>
                    <div class="sajilo-collage-item">
                        <div style="width:100%; height:100%; display:flex; flex-direction:column; justify-content:center; align-items:center; background-color:#1b4d3e; color:#ffffff; padding:24px; text-align:center;">
                            <h4 style="font-size:24px; font-weight:800; margin-bottom:8px;">SIMPLE</h4>
                            <p style="font-size:12px; opacity:0.8; margin:0;">Zero Visual Friction</p>
                        </div>
                    </div>
                    <div class="sajilo-collage-item">
                        <div style="width:100%; height:100%; display:flex; flex-direction:column; justify-content:center; align-items:center; background-color:#27ae60; color:#ffffff; padding:24px; text-align:center;">
                            <h4 style="font-size:24px; font-weight:800; margin-bottom:8px;">LOCAL</h4>
                            <p style="font-size:12px; opacity:0.8; margin:0;">Spotlighting Nepal</p>
                        </div>
                    </div>
                    <div class="sajilo-collage-item" style="grid-column: span 2;">
                        <div style="width:100%; height:100%; display:flex; flex-direction:column; justify-content:center; align-items:center; background-color:var(--bg-surface-elevated); padding:24px; text-align:center;">
                            <h4 style="font-size:20px; font-weight:800; margin-bottom:8px; color:var(--text-primary);">TRUSTED ECOSYSTEM</h4>
                            <p style="font-size:13px; color:var(--text-secondary); max-width:320px; margin:0;">Order checkpoints, local currencies, verified ratings, and clear shipping timelines.</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- 22. REFLECTION -->
            <section class="sajilo-section">
                <div class="sajilo-section-title-wrapper">
                    <span class="sajilo-section-tag">21 / REFLECTION</span>
                    <h3 class="sajilo-section-title">What I learned.</h3>
                </div>
                <div class="sajilo-text-columns-2">
                    <div>
                        <p class="sajilo-editorial-paragraph" style="font-size: 16px;">
                            Designing Sajilo helped me think beyond individual screens and consider how a complete product experience connects together.
                        </p>
                        <p class="sajilo-editorial-paragraph" style="font-size: 16px;">
                            The biggest challenge was balancing the richness expected from an e-commerce platform with the simplicity I wanted the product to communicate.
                        </p>
                    </div>
                    <div>
                        <p class="sajilo-editorial-paragraph" style="font-size: 16px;">
                            The project also pushed me to think about localization beyond language — considering NPR pricing, local payment methods, delivery expectations and how Nepali products could become part of the primary discovery experience.
                        </p>
                        <p class="sajilo-editorial-paragraph" style="font-size: 16px; font-style: italic; color: #27ae60; border-left: 2px solid #27ae60; padding-left: 16px;">
                            One important lesson was that simplicity is not about removing features. It is about deciding what information users need, when they need it, and how clearly it is presented.
                        </p>
                    </div>
                </div>
            </section>

            <!-- 23. WHAT I WOULD TEST NEXT -->
            <section class="sajilo-section">
                <div class="sajilo-section-title-wrapper">
                    <span class="sajilo-section-tag">22 / FUTURE VALIDATIONS</span>
                    <h3 class="sajilo-section-title">What I would test next.</h3>
                </div>
                <p class="sajilo-editorial-paragraph">
                    Because this project was developed on competitor research and strategic design layouts, the critical next stage demands direct field testing with real target users to measure flow metrics.
                </p>

                <div class="sajilo-sequence-grid">
                    <div class="sajilo-sequence-step">
                        <div class="sajilo-sequence-number">TEST 01</div>
                        <div class="sajilo-sequence-title">Search Speed</div>
                        <p class="sajilo-sequence-desc">Can users find a target local product in under 15 seconds?</p>
                    </div>
                    <div class="sajilo-sequence-step">
                        <div class="sajilo-sequence-number">TEST 02</div>
                        <div class="sajilo-sequence-title">Local Visibility</div>
                        <p class="sajilo-sequence-desc">Do shoppers naturally interact with the 'Made in Nepal' feed?</p>
                    </div>
                    <div class="sajilo-sequence-step">
                        <div class="sajilo-sequence-number">TEST 03</div>
                        <div class="sajilo-sequence-title">Spec Scanning</div>
                        <p class="sajilo-sequence-desc">Is product and delivery cost info understandable instantly?</p>
                    </div>
                    <div class="sajilo-sequence-step">
                        <div class="sajilo-sequence-number">TEST 04</div>
                        <div class="sajilo-sequence-title">Checkout Rate</div>
                        <p class="sajilo-sequence-desc">Do payment steps cause any exit loops or cart abandons?</p>
                    </div>
                    <div class="sajilo-sequence-step">
                        <div class="sajilo-sequence-number">TEST 05</div>
                        <div class="sajilo-sequence-title">Local Trust</div>
                        <p class="sajilo-sequence-desc">Do localized payment and shipping details build shopper confidence?</p>
                    </div>
                </div>

                <div class="sajilo-editorial-block" data-number="🎯" style="margin-top: 32px;">
                    <p class="sajilo-keyword-desc" style="font-size: 15px; font-style: italic; font-weight: 600;">
                        "The next iteration would be driven by what real users do, not just what looks right in the interface."
                    </p>
                </div>
            </section>

            <!-- 24. FINAL PROJECT SHOWCASE -->
            <section class="sajilo-section">
                <div class="sajilo-section-title-wrapper">
                    <span class="sajilo-section-tag">23 / PRODUCT SHOWCASE</span>
                    <h3 class="sajilo-section-title">Final Project Showcase</h3>
                </div>

                <div class="sajilo-immersive-box">
                    <h3 style="font-family: 'Poppins', sans-serif; font-size: clamp(32px, 6vw, 64px); font-weight: 800; color: #27ae60; margin: 0 0 12px 0;">SAJILO</h3>
                    <h4 style="font-family: 'Noto Sans Devanagari', sans-serif; font-size: clamp(20px, 4vw, 36px); font-weight: 500; color: var(--text-secondary); margin: 0 0 16px 0;">सजिलो</h4>
                    <p style="font-size: 18px; color: var(--text-muted); max-width: 600px; margin: 0 auto 32px auto;">Shopping made simple.</p>

                    <div class="sajilo-screenshot-wrapper" style="max-width: 500px; margin: 0 auto 40px auto; border-radius: 24px;">
                        <img src="images/sajilo-hero.png" alt="Sajilo Interface Showcase" style="width: 100%;">
                    </div>
                </div>

                <!-- Figma Link Integration Box -->
                <div class="sajilo-figma-box">
                    <div class="sajilo-figma-info">
                        <h4>Explore the Interactive Prototype</h4>
                        <p>View the complete mobile user flow and interactive screens directly inside the Figma working file.</p>
                    </div>
                    <a href="https://www.figma.com/design/YoglKz6wgMp6WFoUWP3gaU/Sajilo-App?node-id=0-1&t=Z5EuGjZ4fojoaWKx-1" target="_blank" class="sajilo-figma-btn">
                        <i class="fa-brands fa-figma"></i> Open Figma File
                    </a>
                </div>
            </section>

            <!-- 25. NEXT PROJECT -->
            <section class="sajilo-section" style="padding-bottom: 0;">
                <div class="sajilo-section-title-wrapper">
                    <span class="sajilo-section-tag">NEXT PROJECT</span>
                </div>
                <a href="javascript:void(0)" onclick="openCaseStudy('saha-yatri')" class="sajilo-next-project-banner">
                    <div>
                        <div class="sajilo-next-label">NEXT PROJECT &rarr;</div>
                        <div class="sajilo-next-title">Sajilo Web/Desktop</div>
                        <p style="font-size: 13px; color: var(--text-muted); margin: 4px 0 0 0;">Responsive Web / Desktop-first E-commerce Experience</p>
                    </div>
                    <div class="sajilo-next-arrow">&rarr;</div>
                </a>
            </section>
        </div>
        `
    },
    'saha-yatri': {
        title: 'SAJILO — सजिलो (Web)',
        category: 'PRODUCT DESIGN / UI/UX',
        meta: 'Shopping made simple.',
        image: 'images/sajilo-web-collage.png',
        brief: 'A responsive e-commerce experience designed for Nepali shoppers, with a focus on simple discovery, local products and a clearer path from browsing to checkout.',
        customLayout: true,
        html: `
        <div class="sajilo-editorial-container">
            <!-- 1. HERO -->
            <section class="sajilo-section" style="padding-top: 0;">
                <span class="sajilo-section-tag">PRODUCT DESIGN / UI/UX</span>
                <h1 class="sajilo-section-title" style="font-size: clamp(40px, 8vw, 80px); margin-bottom: 8px;">Sajilo</h1>
                <h2 style="font-size: clamp(24px, 4vw, 42px); font-weight: 500; color: #1b4d3e; margin-bottom: 24px; font-family: 'Noto Sans Devanagari', sans-serif;">सजिलो (Web/Desktop)</h2>
                <p class="sajilo-large-typography" style="margin: 0 0 32px 0;">Shopping made simple.</p>
                <p class="sajilo-editorial-paragraph" style="font-size: 19px; max-width: 800px; line-height: 1.6;">
                    A responsive e-commerce experience designed for Nepali shoppers, with a focus on simple discovery, local products and a clearer path from browsing to checkout.
                </p>

                <div class="sajilo-meta-grid">
                    <div class="sajilo-meta-item">
                        <h4>ROLE</h4>
                        <p>UI/UX Designer</p>
                    </div>
                    <div class="sajilo-meta-item">
                        <h4>PLATFORM</h4>
                        <p>Responsive Web</p>
                    </div>
                    <div class="sajilo-meta-item">
                        <h4>TOOLS</h4>
                        <p>Figma</p>
                    </div>
                    <div class="sajilo-meta-item" style="grid-column: span 3;">
                        <h4>PROJECT</h4>
                        <p>Personal Concept Project</p>
                    </div>
                </div>

                <div class="sajilo-hero-image-container">
                    <img src="images/sajilo-web-collage.png" alt="Sajilo Desktop Homepage" class="sajilo-hero-image">
                </div>
            </section>

            <!-- 2. OVERVIEW -->
            <section class="sajilo-section">
                <div class="sajilo-section-title-wrapper">
                    <span class="sajilo-section-tag">01 — OVERVIEW</span>
                    <h3 class="sajilo-section-title">Designing a simpler way to shop online.</h3>
                </div>
                <div class="sajilo-text-columns-2">
                    <div>
                        <p class="sajilo-editorial-paragraph">
                            Sajilo is a conceptual e-commerce website created around a simple question: what could online shopping feel like if the experience were designed to be clear, calm and locally relevant?
                        </p>
                    </div>
                    <div>
                        <p class="sajilo-editorial-paragraph">
                            The project explores a Nepali e-commerce experience where local products and craftsmanship are not buried inside a large catalogue, but become part of the main discovery experience.
                        </p>
                    </div>
                </div>

                <!-- Three Principles Grid -->
                <div class="sajilo-system-grid" style="margin-top: 40px;">
                    <div class="sajilo-system-card" style="border-left: 4px solid #1b4d3e;">
                        <h4 style="color: #1b4d3e; font-size: 18px; margin-bottom: 8px; font-weight: 800;">SIMPLE</h4>
                        <p style="font-size: 14px; color: var(--text-secondary); margin: 0;">Reduce unnecessary friction throughout browsing and checkout.</p>
                    </div>
                    <div class="sajilo-system-card" style="border-left: 4px solid #27ae60;">
                        <h4 style="color: #27ae60; font-size: 18px; margin-bottom: 8px; font-weight: 800;">LOCAL</h4>
                        <p style="font-size: 14px; color: var(--text-secondary); margin: 0;">Give Nepali products and craftsmanship a visible place in discovery.</p>
                    </div>
                    <div class="sajilo-system-card" style="border-left: 4px solid #f39c12;">
                        <h4 style="color: #f39c12; font-size: 18px; margin-bottom: 8px; font-weight: 800;">TRUSTED</h4>
                        <p style="font-size: 14px; color: var(--text-secondary); margin: 0;">Make product, delivery and payment information easy to understand.</p>
                    </div>
                </div>
            </section>

            <!-- 3. THE PROBLEM -->
            <section class="sajilo-section">
                <div class="sajilo-section-title-wrapper">
                    <span class="sajilo-section-tag">02 — THE PROBLEM</span>
                    <h3 class="sajilo-section-title">The challenge wasn't finding more products. It was finding the right one.</h3>
                </div>
                <p class="sajilo-editorial-paragraph">
                    Large e-commerce platforms can offer enormous product variety, but that variety can also make the experience feel crowded and difficult to navigate. For Sajilo, the design challenge was to explore how an e-commerce website could retain the useful patterns people already understand while creating a calmer and more focused shopping journey.
                </p>
                <p class="sajilo-editorial-paragraph" style="font-style: italic; color: var(--text-muted); margin-bottom: 32px;">
                    "The initial research phase focused on reviewing existing e-commerce experiences and identifying patterns worth learning from."
                </p>

                <!-- Prominent Design Question -->
                <div class="sajilo-editorial-block" data-number="💡" style="border-left: 4px solid #1b4d3e; background-color: var(--bg-surface-elevated);">
                    <span style="font-size: 12px; font-weight: 700; color: #1b4d3e; letter-spacing: 0.1em; text-transform: uppercase; display: block; margin-bottom: 8px;">Design Question</span>
                    <h4 style="font-size: 22px; font-weight: 700; line-height: 1.4; color: var(--text-primary); margin: 0; max-width: 640px;">
                        "How might we make online shopping feel simpler while helping Nepali products and local brands stand out?"
                    </h4>
                </div>
            </section>

            <!-- 4. COMPETITOR REVIEW -->
            <section class="sajilo-section">
                <div class="sajilo-section-title-wrapper">
                    <span class="sajilo-section-tag">03 — COMPETITOR REVIEW</span>
                    <h3 class="sajilo-section-title">Learning from existing e-commerce experiences.</h3>
                </div>
                <p class="sajilo-editorial-paragraph">
                    The competitor review helped establish familiar interaction patterns while also highlighting where Sajilo could develop its own identity. We reviewed Daraz, Jeevee, and Amazon across several key dimensions to understand baseline conventions.
                </p>

                <!-- Comparison Table -->
                <div style="overflow-x: auto; margin: 32px 0; border: 1px solid var(--border-color); border-radius: var(--border-radius-md); box-shadow: var(--shadow-premium);">
                    <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 14px; background: var(--bg-surface);">
                        <thead>
                            <tr style="background-color: var(--bg-surface-elevated); border-bottom: 1px solid var(--border-color);">
                                <th style="padding: 16px; font-weight: 700;">Dimension</th>
                                <th style="padding: 16px; font-weight: 700; color: #1b4d3e;">Daraz</th>
                                <th style="padding: 16px; font-weight: 700; color: #27ae60;">Jeevee</th>
                                <th style="padding: 16px; font-weight: 700; color: #e67e22;">Amazon</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom: 1px solid var(--border-color);">
                                <td style="padding: 16px; font-weight: 600;">Homepage & discovery</td>
                                <td style="padding: 16px; color: var(--text-secondary);">High-density grid, heavy promotional banners</td>
                                <td style="padding: 16px; color: var(--text-secondary);">Healthcare focused, clean category tabs</td>
                                <td style="padding: 16px; color: var(--text-secondary);">Personalized blocks, multi-layer rows</td>
                            </tr>
                            <tr style="border-bottom: 1px solid var(--border-color);">
                                <td style="padding: 16px; font-weight: 600;">Navigation</td>
                                <td style="padding: 16px; color: var(--text-secondary);">Dense multi-tier hover menus</td>
                                <td style="padding: 16px; color: var(--text-secondary);">Simple sidebar and search focus</td>
                                <td style="padding: 16px; color: var(--text-secondary);">Megamenu under "All" with extensive depth</td>
                            </tr>
                            <tr style="border-bottom: 1px solid var(--border-color);">
                                <td style="padding: 16px; font-weight: 600;">Product listing</td>
                                <td style="padding: 16px; color: var(--text-secondary);">Dense lists, aggressive discount badges</td>
                                <td style="padding: 16px; color: var(--text-secondary);">Structured cards with quick add-to-cart</td>
                                <td style="padding: 16px; color: var(--text-secondary);">Standard grid, strong rating emphasis</td>
                            </tr>
                            <tr style="border-bottom: 1px solid var(--border-color);">
                                <td style="padding: 16px; font-weight: 600;">Product details</td>
                                <td style="padding: 16px; color: var(--text-secondary);">Long scroll, multiple tabs, cluttered specifications</td>
                                <td style="padding: 16px; color: var(--text-secondary);">Prescription-first, structured usage info</td>
                                <td style="padding: 16px; color: var(--text-secondary);">Multi-column buy boxes, intense reviews</td>
                            </tr>
                            <tr style="border-bottom: 1px solid var(--border-color);">
                                <td style="padding: 16px; font-weight: 600;">Cart & checkout</td>
                                <td style="padding: 16px; color: var(--text-secondary);">Voucher-heavy, multi-seller separate shipping</td>
                                <td style="padding: 16px; color: var(--text-secondary);">Clean step-by-step progress tracker</td>
                                <td style="padding: 16px; color: var(--text-secondary);">Single click, buy-box integrated flows</td>
                            </tr>
                            <tr style="border-bottom: 1px solid var(--border-color);">
                                <td style="padding: 16px; font-weight: 600;">Recommendations</td>
                                <td style="padding: 16px; color: var(--text-secondary);">Behavioral suggestions, sometimes repeating</td>
                                <td style="padding: 16px; color: var(--text-secondary);">Substitutes and complementary items</td>
                                <td style="padding: 16px; color: var(--text-secondary);">Collaborative filtering, heavily integrated</td>
                            </tr>
                            <tr style="border-bottom: 1px solid var(--border-color);">
                                <td style="padding: 16px; font-weight: 600;">Local product discovery</td>
                                <td style="padding: 16px; color: var(--text-secondary);">Buried under general keywords and generic filters</td>
                                <td style="padding: 16px; color: var(--text-secondary);">N/A (mainly medical and generic baby brands)</td>
                                <td style="padding: 16px; color: var(--text-secondary);">Amazon Launchpad/Handmade but separate tabs</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- Competitor Analysis Diagram Placeholder -->
                <div class="sajilo-diagram-placeholder">
                    <span class="sajilo-diagram-title">[COMPETITOR ANALYSIS DIAGRAM]</span>
                    <div style="font-family: 'Poppins', sans-serif; font-size: 13px; color: var(--text-secondary); max-width: 480px; margin: 0 auto;">
                        Our structured audit mapped e-commerce density against user scanning speeds, establishing the precise baseline for Sajilo’s spatial spacing.
                    </div>
                </div>
            </section>

            <!-- 5. DESIGN DIRECTION -->
            <section class="sajilo-section">
                <div class="sajilo-section-title-wrapper">
                    <span class="sajilo-section-tag">04 — DESIGN DIRECTION</span>
                    <h3 class="sajilo-section-title">Making "Sajilo" feel simple.</h3>
                </div>
                <p class="sajilo-editorial-paragraph">
                    The visual direction is built to convey a calm, natural, premium, local, and approachable feel. The visual restraint was intentional so product photography and important information remain easy to notice.
                </p>

                <!-- Palette Container -->
                <div class="sajilo-palette-container">
                    <div class="sajilo-color-swatch">
                        <div class="sajilo-color-preview" style="background-color: #1b4d3e;"></div>
                        <div class="sajilo-color-info">
                            <div class="sajilo-color-name">Primary Green</div>
                            <div class="sajilo-color-hex">#1B4D3E</div>
                        </div>
                    </div>
                    <div class="sajilo-color-swatch">
                        <div class="sajilo-color-preview" style="background-color: #f5efeb;"></div>
                        <div class="sajilo-color-info">
                            <div class="sajilo-color-name">Warm Background</div>
                            <div class="sajilo-color-hex">#F5EFEB</div>
                        </div>
                    </div>
                    <div class="sajilo-color-swatch">
                        <div class="sajilo-color-preview" style="background-color: #2c3e50;"></div>
                        <div class="sajilo-color-info">
                            <div class="sajilo-color-name">Deep Text</div>
                            <div class="sajilo-color-hex">#2C3E50</div>
                        </div>
                    </div>
                    <div class="sajilo-color-swatch">
                        <div class="sajilo-color-preview" style="background-color: #7f8c8d;"></div>
                        <div class="sajilo-color-info">
                            <div class="sajilo-color-name">Muted Text</div>
                            <div class="sajilo-color-hex">#7F8C8D</div>
                        </div>
                    </div>
                    <div class="sajilo-color-swatch">
                        <div class="sajilo-color-preview" style="background-color: #e2dcd8;"></div>
                        <div class="sajilo-color-info">
                            <div class="sajilo-color-name">Subtle Borders</div>
                            <div class="sajilo-color-hex">#E2DCD8</div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- 6. INFORMATION ARCHITECTURE -->
            <section class="sajilo-section">
                <div class="sajilo-section-title-wrapper">
                    <span class="sajilo-section-tag">05 — INFORMATION ARCHITECTURE</span>
                    <h3 class="sajilo-section-title">Structuring the shopping experience.</h3>
                </div>
                <p class="sajilo-editorial-paragraph">
                    A clean, nested layout organizes the navigation flow and guarantees key details are always within close proximity.
                </p>

                <!-- Information Architecture Diagram -->
                <div class="sajilo-diagram-placeholder" style="background-color: var(--bg-surface); padding: 30px;">
                    <div style="text-align: left; display: inline-block; font-family: monospace; font-size: 14px; line-height: 1.6; color: var(--text-primary);">
                        <strong style="color: #1b4d3e;">HOME</strong><br>
                        ├── Search<br>
                        ├── Categories<br>
                        ├── Featured Products<br>
                        ├── Local Craft<br>
                        └── Product Discovery<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;├── Fashion<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;├── Handmade<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;├── Organic<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;├── Jewellery<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;└── Decor<br>
                        <br>
                        <strong style="color: #1b4d3e;">PRODUCT LISTING</strong><br>
                        └── Filters (Categories, Material, Rating, Pricing)<br>
                        <br>
                        <strong style="color: #1b4d3e;">PRODUCT DETAILS</strong><br>
                        └── Info (Images, Variants, Price, Delivery, Materials & Care, Related)<br>
                        <br>
                        <strong style="color: #1b4d3e;">CART</strong><br>
                        └── Details (Products, Quantity, Delivery, Order Summary)<br>
                        <br>
                        <strong style="color: #1b4d3e;">CHECKOUT</strong><br>
                        └── Stages (Delivery Details, Payment, Order Confirmation)
                    </div>
                </div>
            </section>

            <!-- 7. HOMEPAGE -->
            <section class="sajilo-section">
                <div class="sajilo-section-title-wrapper">
                    <span class="sajilo-section-tag">06 — HOMEPAGE</span>
                    <h3 class="sajilo-section-title">A homepage built around discovery.</h3>
                </div>

                <div class="sajilo-ui-grid-2">
                    <div class="sajilo-screenshot-wrapper">
                        <img src="images/sajilo-web-collage.png" alt="Sajilo Home Page Layout">
                    </div>
                    <div class="sajilo-callout-list">
                        <div class="sajilo-callout-item">
                            <div class="sajilo-callout-number">01</div>
                            <div class="sajilo-callout-content">
                                <h4>Search</h4>
                                <p>The search bar is positioned prominently so users who already know what they want can immediately begin searching.</p>
                            </div>
                        </div>
                        <div class="sajilo-callout-item">
                            <div class="sajilo-callout-number">02</div>
                            <div class="sajilo-callout-content">
                                <h4>Hero Section</h4>
                                <p>The hero communicates the product's main positioning: "Everything you need. Made simple." and introduces the local craft-focused direction.</p>
                            </div>
                        </div>
                        <div class="sajilo-callout-item">
                            <div class="sajilo-callout-number">03</div>
                            <div class="sajilo-callout-content">
                                <h4>Categories</h4>
                                <p>The category shortcuts provide quick access to common shopping areas without requiring users to navigate through a large menu.</p>
                            </div>
                        </div>
                        <div class="sajilo-callout-item">
                            <div class="sajilo-callout-number">04</div>
                            <div class="sajilo-callout-content">
                                <h4>Featured Products</h4>
                                <p>Featured products create a discovery layer for users who are browsing rather than searching for something specific.</p>
                            </div>
                        </div>
                        <div class="sajilo-callout-item">
                            <div class="sajilo-callout-number">05</div>
                            <div class="sajilo-callout-content">
                                <h4>Local Craft</h4>
                                <p>The local craft section intentionally breaks the traditional product-grid pattern, introducing the people, process, and story behind local craftsmanship.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- 8. LOCAL CRAFT STORYTELLING -->
            <section class="sajilo-section">
                <div class="sajilo-section-title-wrapper">
                    <span class="sajilo-section-tag">07 — LOCAL CRAFT STORYTELLING</span>
                    <h3 class="sajilo-section-title">Selling the story, not just the product.</h3>
                </div>
                <div class="sajilo-text-columns-2" style="align-items: center;">
                    <div>
                        <p class="sajilo-editorial-paragraph">
                            One of the ways Sajilo differentiates itself is by treating local craftsmanship as part of the shopping experience rather than simply another category.
                        </p>
                        <p class="sajilo-editorial-paragraph">
                            The section uses editorial imagery and short storytelling blocks to create emotional context around local products.
                        </p>
                        <p class="sajilo-editorial-paragraph" style="font-style: italic; color: var(--text-muted);">
                            "This was a design direction explored through the concept."
                        </p>
                    </div>
                    <div class="sajilo-screenshot-wrapper">
                        <img src="images/sajilo-web-collage.png" alt="Sajilo Local Craft Showcase">
                    </div>
                </div>
            </section>

            <!-- 9. PRODUCT DISCOVERY -->
            <section class="sajilo-section">
                <div class="sajilo-section-title-wrapper">
                    <span class="sajilo-section-tag">08 — PRODUCT DISCOVERY</span>
                    <h3 class="sajilo-section-title">Making browsing easy to scan.</h3>
                </div>

                <div class="sajilo-ui-grid-2">
                    <div class="sajilo-screenshot-wrapper">
                        <img src="images/sajilo-web-collage.png" alt="Sajilo Product Discovery">
                    </div>
                    <div>
                        <p class="sajilo-editorial-paragraph">
                            The product listing uses a familiar e-commerce structure: Category context, Filters, Sorting, Product cards, Product imagery, Product name, Product category, Price, and Wishlist/action controls.
                        </p>
                        <p class="sajilo-editorial-paragraph">
                            The left-side filter panel gives users control without overwhelming the product grid. Product cards prioritize visual recognition first, followed by essential purchasing information.
                        </p>
                        <div class="sajilo-editorial-block" data-number="⚡" style="margin-top: 24px;">
                            <h4 style="margin: 0; font-size: 18px; color: #1b4d3e;">"Browse visually. Decide quickly."</h4>
                        </div>
                    </div>
                </div>
            </section>

            <!-- 10. PRODUCT DETAILS -->
            <section class="sajilo-section">
                <div class="sajilo-section-title-wrapper">
                    <span class="sajilo-section-tag">09 — PRODUCT DETAILS</span>
                    <h3 class="sajilo-section-title">Everything needed to make a purchase decision.</h3>
                </div>

                <div class="sajilo-ui-grid-2">
                    <div class="sajilo-callout-list">
                        <div class="sajilo-callout-item">
                            <div class="sajilo-callout-number">01</div>
                            <div class="sajilo-callout-content">
                                <h4>Product Visuals</h4>
                                <p>Large product imagery gives the product the visual priority it deserves, allowing buyers to inspect textures and detail.</p>
                            </div>
                        </div>
                        <div class="sajilo-callout-item">
                            <div class="sajilo-callout-number">02</div>
                            <div class="sajilo-callout-content">
                                <h4>Product Information</h4>
                                <p>Name, price, rating and description are grouped together so the user can understand the product quickly.</p>
                            </div>
                        </div>
                        <div class="sajilo-callout-item">
                            <div class="sajilo-callout-number">03</div>
                            <div class="sajilo-callout-content">
                                <h4>Variants</h4>
                                <p>Color and quantity controls are positioned close to the purchase action to decrease scanning fatigue.</p>
                            </div>
                        </div>
                        <div class="sajilo-callout-item">
                            <div class="sajilo-callout-number">04</div>
                            <div class="sajilo-callout-content">
                                <h4>Delivery</h4>
                                <p>Delivery information appears near the purchase area because delivery expectations are part of the buying decision.</p>
                            </div>
                        </div>
                        <div class="sajilo-callout-item">
                            <div class="sajilo-callout-number">05</div>
                            <div class="sajilo-callout-content">
                                <h4>Related Products</h4>
                                <p>"You might also like" provides a natural discovery path without interrupting the primary purchase flow.</p>
                            </div>
                        </div>
                    </div>
                    <div class="sajilo-screenshot-wrapper">
                        <img src="images/sajilo-web-collage.png" alt="Handmade Dhaka Shawl Product Details">
                    </div>
                </div>
            </section>

            <!-- 11. CART -->
            <section class="sajilo-section">
                <div class="sajilo-section-title-wrapper">
                    <span class="sajilo-section-tag">10 — CART</span>
                    <h3 class="sajilo-section-title">Keeping the cart easy to understand.</h3>
                </div>

                <div class="sajilo-ui-grid-2">
                    <div class="sajilo-screenshot-wrapper">
                        <img src="images/sajilo-web-collage.png" alt="Sajilo Shopping Cart">
                    </div>
                    <div>
                        <p class="sajilo-editorial-paragraph">
                            The cart layout splits the screen to avoid overloading:
                        </p>
                        <p class="sajilo-editorial-paragraph" style="padding-left: 16px; border-left: 2px solid #1b4d3e;">
                            <strong>Left:</strong> Selected products and quantity controls.<br>
                            <strong>Right:</strong> Order summary and total (Subtotal, Delivery Fee, Total separated cleanly, with a highly dominant "Proceed to Checkout" action).
                        </p>
                        <p class="sajilo-editorial-paragraph">
                            The free-delivery progress indicator provides additional context about how close the user is to the delivery threshold.
                        </p>
                        <p class="sajilo-editorial-paragraph" style="font-style: italic; color: var(--text-muted);">
                            "This creates a small moment of feedback while the user reviews their cart."
                        </p>
                    </div>
                </div>
            </section>

            <!-- 12. CHECKOUT -->
            <section class="sajilo-section">
                <div class="sajilo-section-title-wrapper">
                    <span class="sajilo-section-tag">11 — CHECKOUT</span>
                    <h3 class="sajilo-section-title">Reducing friction at the final step.</h3>
                </div>
                <p class="sajilo-editorial-paragraph">
                    For the final step, the checkout layout is structured to directly address four vital user questions:
                </p>

                <div class="sajilo-sequence-grid">
                    <div class="sajilo-sequence-step">
                        <div class="sajilo-sequence-number">01</div>
                        <div class="sajilo-sequence-title">What am I buying?</div>
                        <p class="sajilo-sequence-desc">A condensed review of line-items, quantities, and properties.</p>
                    </div>
                    <div class="sajilo-sequence-step">
                        <div class="sajilo-sequence-number">02</div>
                        <div class="sajilo-sequence-title">Where is it going?</div>
                        <p class="sajilo-sequence-desc">Clean, autofilled postal and location inputs with maps.</p>
                    </div>
                    <div class="sajilo-sequence-step">
                        <div class="sajilo-sequence-number">03</div>
                        <div class="sajilo-sequence-title">How will I pay?</div>
                        <p class="sajilo-sequence-desc">Localized options like Cash on Delivery (COD) and NPR pricing.</p>
                    </div>
                    <div class="sajilo-sequence-step">
                        <div class="sajilo-sequence-number">04</div>
                        <div class="sajilo-sequence-title">How much will I pay?</div>
                        <p class="sajilo-sequence-desc">Unambiguous total sum representing all fees upfront.</p>
                    </div>
                </div>
            </section>

            <!-- 13. RESPONSIVE THINKING -->
            <section class="sajilo-section">
                <div class="sajilo-section-title-wrapper">
                    <span class="sajilo-section-tag">12 — RESPONSIVE THINKING</span>
                    <h3 class="sajilo-section-title">Designed as a responsive experience.</h3>
                </div>
                <p class="sajilo-editorial-paragraph">
                    The platform coordinates the experience across screen profiles, balancing dense visual layouts with compact interactive containers.
                </p>

                <div class="sajilo-text-columns-2">
                    <div class="sajilo-system-card">
                        <h4 style="color: #1b4d3e; font-weight: 700; margin-bottom: 8px;">DESKTOP</h4>
                        <p style="font-size: 14px; color: var(--text-secondary);">Wide layouts allow richer product discovery, persistent filter sidebars, and multi-column comparison tables.</p>
                    </div>
                    <div class="sajilo-system-card">
                        <h4 style="color: #27ae60; font-weight: 700; margin-bottom: 8px;">SMALLER SCREENS</h4>
                        <p style="font-size: 14px; color: var(--text-secondary);">Content progressively collapses into stacked vertical feeds, sliding panel filters, and fixed bottom utility checkout strips.</p>
                    </div>
                </div>

                <div style="margin-top: 32px; font-size: 14px; color: var(--text-muted);">
                    If you would like to explore the dedicated mobile experience concept, please view our <a href="javascript:void(0)" onclick="openCaseStudy('sajilo')" style="color: #1b4d3e; text-decoration: underline; font-weight: 600;">Sajilo Mobile App case study</a>.
                </div>
            </section>

            <!-- 14. DESIGN SYSTEM -->
            <section class="sajilo-section">
                <div class="sajilo-section-title-wrapper">
                    <span class="sajilo-section-tag">13 — DESIGN SYSTEM</span>
                    <h3 class="sajilo-section-title">A visual system behind the interface.</h3>
                </div>
                <p class="sajilo-editorial-paragraph">
                    Creating reusable patterns helped keep the interface visually consistent across discovery, product details and checkout.
                </p>

                <!-- Color & Typography Showcase -->
                <div class="sajilo-type-showcase">
                    <div class="sajilo-type-item">
                        <h5>Typography</h5>
                        <div class="sajilo-type-large" style="font-family: 'Poppins', sans-serif;">Poppins</div>
                        <div class="sajilo-type-sample" style="font-family: 'Poppins', sans-serif;">Used for clear, modern structural headings and labels.</div>
                    </div>
                    <div class="sajilo-type-item">
                        <h5>Secondary Font</h5>
                        <div class="sajilo-type-large" style="font-family: 'Noto Sans Devanagari', sans-serif;">Devanagari</div>
                        <div class="sajilo-type-sample" style="font-family: 'Noto Sans Devanagari', sans-serif;">Incorporated for localized headings, branding, and local terms.</div>
                    </div>
                </div>

                <!-- Components list -->
                <div class="sajilo-system-grid" style="grid-template-columns: repeat(3, 1fr); margin-top: 24px;">
                    <div class="sajilo-system-card">
                        <h5 style="margin: 0 0 8px 0; color: #1b4d3e;">NAVIGATION</h5>
                        <p style="font-size: 13px; color: var(--text-secondary); margin: 0;">Sticky headers, profile quick-menus, search boxes, and responsive side drawers.</p>
                    </div>
                    <div class="sajilo-system-card">
                        <h5 style="margin: 0 0 8px 0; color: #1b4d3e;">CONTROLS</h5>
                        <p style="font-size: 13px; color: var(--text-secondary); margin: 0;">Multi-select filters, price sliders, quantity counters, and custom variation buttons.</p>
                    </div>
                    <div class="sajilo-system-card">
                        <h5 style="margin: 0 0 8px 0; color: #1b4d3e;">FEEDBACK</h5>
                        <p style="font-size: 13px; color: var(--text-secondary); margin: 0;">Progress indicators, custom local badges, status dots, and validation states.</p>
                    </div>
                </div>
            </section>

            <!-- 15. UI STATES -->
            <section class="sajilo-section">
                <div class="sajilo-section-title-wrapper">
                    <span class="sajilo-section-tag">14 — UI STATES</span>
                    <h3 class="sajilo-section-title">Communicating feedback at every turn.</h3>
                </div>
                <p class="sajilo-editorial-paragraph">
                    A complete shopping experience needs to communicate not only what users can do, but also what has happened. Standardizing these states guarantees intuitive navigation.
                </p>

                <!-- UI States Grid -->
                <div class="sajilo-states-grid">
                    <div class="sajilo-state-card">
                        <div class="sajilo-state-image-placeholder">
                            <div class="sajilo-state-icon" style="color: #1b4d3e;"><i class="fa-solid fa-arrow-pointer"></i></div>
                            <span style="font-size: 12px; font-weight: 700; color: #1b4d3e;">HOVER</span>
                        </div>
                        <h4>Hover & Focus</h4>
                        <p>Underlined text links and slightly deepened background cards communicate active selection on cursor pointer.</p>
                    </div>
                    <div class="sajilo-states-grid" style="display: contents;">
                        <div class="sajilo-state-card">
                            <div class="sajilo-state-image-placeholder">
                                <div class="sajilo-state-icon" style="color: #27ae60;"><i class="fa-solid fa-circle-check"></i></div>
                                <span style="font-size: 12px; font-weight: 700; color: #27ae60;">SUCCESS</span>
                            </div>
                            <h4>Success Feedback</h4>
                            <p>Toast banners and inline text checks let shoppers know products are successfully in the bag or payment succeeded.</p>
                        </div>
                        <div class="sajilo-state-card">
                            <div class="sajilo-state-image-placeholder">
                                <div class="sajilo-state-icon" style="color: #e74c3c;"><i class="fa-solid fa-circle-exclamation"></i></div>
                                <span style="font-size: 12px; font-weight: 700; color: #e74c3c;">ERROR</span>
                            </div>
                            <h4>Error Guidance</h4>
                            <p>Highlighting fields with warm borders and inline messages helps resolve empty forms during checkout instantly.</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- 16. HIGH-FIDELITY DESIGN -->
            <section class="sajilo-section">
                <div class="sajilo-section-title-wrapper">
                    <span class="sajilo-section-tag">15 — HIGH-FIDELITY DESIGN</span>
                    <h3 class="sajilo-section-title">The final interface.</h3>
                </div>
                <p class="sajilo-editorial-paragraph">
                    From discovery to checkout, the final interface brings together the product, brand and local-shopping ideas explored throughout the project.
                </p>

                <!-- Editorial Showcase Collage -->
                <div class="sajilo-collage-grid" style="margin-top: 32px;">
                    <div class="sajilo-collage-item sajilo-collage-item-large" style="grid-column: span 2;">
                        <img src="images/sajilo-web-collage.png" alt="Sajilo High Fidelity Screens Collage">
                        <div class="sajilo-collage-caption">Sajilo Web/Desktop Experience: 1. Home, 2. Listing, 3. Details, 4. Cart</div>
                    </div>
                </div>
            </section>

            <!-- 17. FIGMA LINK INTEGRATION BOX -->
            <section class="sajilo-section">
                <div class="sajilo-section-title-wrapper">
                    <span class="sajilo-section-tag">16 — FIGMA</span>
                    <h3 class="sajilo-section-title">Explore the full design.</h3>
                </div>
                <p class="sajilo-editorial-paragraph">
                    The case study shows the thinking behind the experience. The complete Figma file contains the detailed screens, components and visual design.
                </p>

                <div class="sajilo-figma-box">
                    <div class="sajilo-figma-info">
                        <h4>Explore the Interactive Prototype</h4>
                        <p>View the complete mobile user flow and interactive screens directly inside the Figma working file.</p>
                    </div>
                    <a href="https://www.figma.com/design/EizK7HfmORHRwqebLomoZK/Sajilo-Web?node-id=0-1&t=uyVc7KwHB6rXfUt8-1" target="_blank" class="sajilo-figma-btn">
                        <i class="fa-brands fa-figma"></i> Open Figma File
                    </a>
                </div>
            </section>

            <!-- 18. REFLECTION -->
            <section class="sajilo-section">
                <div class="sajilo-section-title-wrapper">
                    <span class="sajilo-section-tag">17 — REFLECTION</span>
                    <h3 class="sajilo-section-title">What I learned.</h3>
                </div>
                <div class="sajilo-text-columns-2">
                    <div>
                        <p class="sajilo-editorial-paragraph" style="font-size: 16px;">
                            Working on Sajilo helped me think beyond individual screens and consider how an e-commerce experience connects discovery, decision-making and checkout.
                        </p>
                        <p class="sajilo-editorial-paragraph" style="font-size: 16px;">
                            The main priority was designing for clarity rather than feature quantity. It forced me to balance quick visual product discovery with genuine local craftsmanship storytelling.
                        </p>
                    </div>
                    <div>
                        <p class="sajilo-editorial-paragraph" style="font-size: 16px;">
                            I also explored how checkout elements like payment options and shipping pricing directly affect a buyer’s trust. This project served as an amazing lesson in creating consistent visual components across multiple templates.
                        </p>
                    </div>
                </div>
            </section>

            <!-- 19. WHAT I WOULD DO NEXT -->
            <section class="sajilo-section">
                <div class="sajilo-section-title-wrapper">
                    <span class="sajilo-section-tag">18 — WHAT I WOULD DO NEXT</span>
                    <h3 class="sajilo-section-title">If I took Sajilo further.</h3>
                </div>
                <p class="sajilo-editorial-paragraph">
                    Because this is a personal concept project, the next stage would involve real user validation. To carry the web platform forward, I would pursue these key actions:
                </p>

                <div class="sajilo-sequence-grid">
                    <div class="sajilo-sequence-step">
                        <div class="sajilo-sequence-number">01</div>
                        <div class="sajilo-sequence-title">Usability Testing</div>
                        <p class="sajilo-sequence-desc">Conduct usability testing with Nepali online shoppers to measure browsing completion times.</p>
                    </div>
                    <div class="sajilo-sequence-step">
                        <div class="sajilo-sequence-number">02</div>
                        <div class="sajilo-sequence-title">Discovery & Filter Audit</div>
                        <p class="sajilo-sequence-desc">Test product discovery and filtering controls to see if categories remain easy to query.</p>
                    </div>
                    <div class="sajilo-sequence-step">
                        <div class="sajilo-sequence-number">03</div>
                        <div class="sajilo-sequence-title">Local Craft Visibility</div>
                        <p class="sajilo-sequence-desc">Validate whether shoppers notice the storytelling-focused sections and local badges.</p>
                    </div>
                    <div class="sajilo-sequence-step">
                        <div class="sajilo-sequence-number">04</div>
                        <div class="sajilo-sequence-title">Checkout Comprehension</div>
                        <p class="sajilo-sequence-desc">Assess payment step comprehension and checkout flow clarity on desktop and mobile.</p>
                    </div>
                </div>
            </section>

            <!-- 20. FINAL STATEMENT -->
            <section class="sajilo-section" style="border-top: 1px solid var(--border-color); padding-top: 60px;">
                <div class="sajilo-immersive-box" style="background-color: var(--bg-surface-elevated); border: 1px solid var(--border-color); border-radius: var(--border-radius-lg); text-align: center; padding: 60px 40px; margin-bottom: 40px;">
                    <h3 style="font-family: 'Poppins', sans-serif; font-size: clamp(28px, 5vw, 48px); font-weight: 800; color: #1b4d3e; margin: 0 0 12px 0;">Sajilo</h3>
                    <h4 style="font-family: 'Noto Sans Devanagari', sans-serif; font-size: clamp(18px, 3vw, 28px); font-weight: 500; color: var(--text-secondary); margin: 0 0 16px 0;">सजिलो</h4>
                    <p class="sajilo-large-typography" style="font-size: 20px; color: var(--text-muted); max-width: 600px; margin: 0 auto 24px auto;">
                        Sajilo started with a simple idea: shopping should feel simple.
                    </p>
                    <p style="font-size: 15px; color: var(--text-secondary); max-width: 550px; margin: 0 auto; line-height: 1.6;">
                        The final concept brings that idea into the interface through clearer discovery, thoughtful product presentation and a stronger connection to local products.
                    </p>
                </div>
            </section>

            <!-- NEXT PROJECT BANNER -->
            <section class="sajilo-section" style="padding-bottom: 0;">
                <div class="sajilo-section-title-wrapper">
                    <span class="sajilo-section-tag">NEXT PROJECT</span>
                </div>
                <a href="javascript:void(0)" onclick="openCaseStudy('paila')" class="sajilo-next-project-banner">
                    <div>
                        <div class="sajilo-next-label">NEXT PROJECT &rarr;</div>
                        <div class="sajilo-next-title">Paila Travel App</div>
                        <p style="font-size: 13px; color: var(--text-muted); margin: 4px 0 0 0;">Nepal-focused Travel Planning App</p>
                    </div>
                    <div class="sajilo-next-arrow">&rarr;</div>
                </a>
            </section>
        </div>
        `
    },
    'paila': {
        title: 'Paila — travel planning app',
        category: 'Travel App Design',
        meta: 'Personal project',
        image: 'images/paila-hero.png',
        brief: 'Paila is a Nepal-focused travel planning app designed to make discovering and organizing trips feel simpler and more personal.',
        figmaLink: 'https://www.figma.com/design/svUe1yqe7m7uZ2z3xfSfhz/Paila-App?node-id=0-1&t=uyVc7KwHB6rXfUt8-1',
        sections: [
            {
                title: '01 — OVERVIEW',
                html: '<p>Paila is a Nepal-focused travel planning app designed to make discovering and organizing trips feel simpler and more personal.</p><p>The concept brings destination discovery, saved places, itinerary planning, budgeting, collaboration, and travel-day information into one cohesive experience.</p><p><strong>My role:</strong> UI/UX Designer<br><strong>Tool:</strong> Figma<br><strong>Platform:</strong> Mobile<br><strong>Type:</strong> Personal project</p>'
            },
            {
                title: '02 — THE PROBLEM',
                html: '<p>Planning a trip can mean jumping between different platforms to discover destinations, decide what to do, organize an itinerary, and keep track of the trip.</p><p>I wanted to explore: <em>How might we make planning a trip around Nepal feel less overwhelming and more personal?</em></p>'
            },
            {
                title: '03 — RESEARCH & INSPIRATION',
                html: '<p>I conducted competitor/interface research to understand how existing digital products approach discovery, search, saved content, navigation, and structured information.</p><p>I also looked at travel-planning patterns to identify opportunities for a more personalized Nepal-focused experience.</p><p>One of the main ideas I explored was: Instead of simply asking <strong>"Where do you want to go?"</strong> &rarr; ask <strong>"What kind of trip do you want?"</strong> This led to Paila\'s mood-based planning concept.</p>'
            },
            {
                title: '04 — THE SOLUTION',
                html: `<p>Paila guides users through a simple journey: <strong>Explore &rarr; Save &rarr; Plan &rarr; Personalize &rarr; Travel</strong></p><p>Users can:</p><ul><li>Explore destinations across Nepal</li><li>Save places they're interested in</li><li>Plan a trip based on duration and companions</li><li>Choose their travel mood/preferences</li><li>View a day-by-day itinerary</li><li>Collaborate with travel companions</li><li>Track a trip budget</li><li>Use a map to discover places</li><li>Access local travel tips and phrases</li></ul><p>The key idea is that the same destination can become a very different trip depending on the person travelling.</p>
                <div class="case-study-visual">
                    <span class="visual-title">The Paila Journey</span>
                    <div class="visual-wireframe-container">
                        <div class="wireframe-element-row" style="height: 60px;">
                            <div class="wireframe-box" style="flex: 1;">Explore Nepal</div>
                            <div class="wireframe-box" style="flex: 1;">Save Places</div>
                            <div class="wireframe-box" style="flex: 1;">Plan & Mood Selection</div>
                            <div class="wireframe-box" style="flex: 1;">Itinerary & Travel</div>
                        </div>
                    </div>
                </div>`
            },
            {
                title: '05 — KEY DESIGN DECISIONS',
                html: '<p><strong>Mood-based planning</strong><br>Rather than making users understand complicated travel categories, Paila asks what kind of experience they want: <em>Relaxed · Adventure · Culture · Nature · Food</em>. This makes personalization feel more natural.</p><p><strong>Timeline-based itinerary</strong><br>The daily itinerary uses a timeline so users can quickly understand what happens next, when it happens, and where they need to go.</p><p><strong>Discovery &rarr; Planning separation</strong><br><em>Explore</em> is for discovering possibilities, while <em>Trips</em> is for managing something you\'ve already decided to do. This keeps the interface from becoming overwhelming.</p><p><strong>Practical travel support</strong><br>Paila also includes things that become useful once the trip actually starts, such as: <em>Local phrases · Safety · Travel etiquette · Budget · Travel-day view</em></p>'
            },
            {
                title: '06 — FINAL DESIGN',
                html: '<p>The final prototype brings these pieces together into one travel journey:</p><p style="text-align: center; font-weight: bold; margin: 16px 0;">Discover Nepal &darr;<br>Save places &darr;<br>Plan your trip &darr;<br>Choose your mood &darr;<br>Build your itinerary &darr;<br>Travel</p><p>The visual direction uses warm beige and brown tones to create a calm, grounded feeling inspired by travel and Nepal\'s natural and cultural character.</p>'
            },
            {
                title: '07 — REFLECTION',
                html: '<p>Paila helped me explore how a travel product can go beyond simply showing destinations. The biggest thing I learned was that good travel planning is not only about giving users more options — it\'s about helping them make decisions without feeling overwhelmed.</p><p>If I continued the project, my next step would be to test the planning flow with real travelers and see whether the mood-based personalization actually helps them create trips they prefer.</p>'
            }
        ]
    },
};

// --- CORE APPLICATION INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initThemeToggle();
    initHeroInteractions();
    initStarTrailCursor();
    init3DTilt();
    initAboutTabs();
    initRelationalSkills();
    initBlueprintMode();
    initMagneticFooter();
    initContactForm();
    setCurrentYear();
});

// --- FIGMA/WIREFRAME BLUEPRINT MODE TOGGLE ---
function initBlueprintMode() {
    const btn = document.getElementById('wireframe-btn');
    if (!btn) return;

    function toggleBlueprint() {
        const active = document.body.classList.toggle('blueprint-mode');
        const icon = btn.querySelector('i');
        const span = btn.querySelector('span');

        if (active) {
            icon.className = 'fa-solid fa-drafting-compass';
            if (span) span.textContent = 'Active (Press \'D\')';
        } else {
            icon.className = 'fa-solid fa-ruler-combined';
            if (span) span.textContent = 'Blueprint Mode (Press \'D\')';
        }
    }

    // Floating Button click trigger
    btn.addEventListener('click', toggleBlueprint);

    // Keyboard Key 'D' trigger
    window.addEventListener('keydown', (e) => {
        const target = e.target.tagName.toLowerCase();
        // Skip keydown logic if the user is actively typing in form inputs
        if (target === 'input' || target === 'textarea') return;

        if (e.key === 'd' || e.key === 'D') {
            toggleBlueprint();
        }
    });
}

// --- MAGNETIC FOOTER SOCIAL INTERACTION ---
function initMagneticFooter() {
    const emailBtn = document.getElementById('social-email-btn');
    if (!emailBtn) return;

    emailBtn.addEventListener('mousemove', (e) => {
        const rect = emailBtn.getBoundingClientRect();
        // Calculate coordinate offsets inside the button bounds
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        // Apply magnetic translation pull (spring ratio)
        emailBtn.style.transform = `translate3d(${x * 0.35}px, ${y * 0.35}px, 0)`;
        emailBtn.style.boxShadow = '0 12px 30px rgba(28,26,24,0.15)';
    });

    emailBtn.addEventListener('mouseleave', () => {
        emailBtn.style.transform = '';
        emailBtn.style.boxShadow = '';
    });
}

// --- INTERACTIVE ABOUT SECTION TABS ---
function initAboutTabs() {
    const tabs = document.querySelectorAll('.about-tab');
    const contents = document.querySelectorAll('.about-tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-tab');

            // Toggle active state on tabs
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Toggle active content panel
            contents.forEach(content => {
                content.classList.remove('active');
                if (content.id === `tab-${target}`) {
                    content.classList.add('active');
                }
            });
        });
    });
}

// --- RELATIONAL SKILLS TO PROJECTS HOVER ---
function initRelationalSkills() {
    const badges = document.querySelectorAll('.skill-badge');

    badges.forEach(badge => {
        const targetProjId = badge.getAttribute('data-related-project');
        if (!targetProjId) return;

        badge.addEventListener('mouseenter', () => {
            const projectCard = document.getElementById(targetProjId);
            if (projectCard) {
                projectCard.classList.add('project-highlighted');
                // Scroll project card into center focus if the user hovers long enough, or just highlight beautifully
            }
        });

        badge.addEventListener('mouseleave', () => {
            const projectCard = document.getElementById(targetProjId);
            if (projectCard) {
                projectCard.classList.remove('project-highlighted');
            }
        });
    });
}

// --- 3D PARALLAX IMAGE TILT ---
function init3DTilt() {
    // Only apply 3D mouse physics on desktop environments
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const cards = document.querySelectorAll('.project-image-wrapper');
    cards.forEach(card => {
        const img = card.querySelector('.project-img');

        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Map standard coordinate bounds to degrees (-10deg to 10deg)
            const xRotate = ((y / rect.height) - 0.5) * -12;
            const yRotate = ((x / rect.width) - 0.5) * 12;

            card.style.transform = `rotateX(${xRotate}deg) rotateY(${yRotate}deg)`;
            if (img) {
                // translate inner image with reverse parallax
                const xTranslate = ((x / rect.width) - 0.5) * -15;
                const yTranslate = ((y / rect.height) - 0.5) * -15;
                img.style.transform = `scale(1.06) translate3d(${xTranslate}px, ${yTranslate}px, 20px)`;
            }
        });

        card.style.transformOrigin = 'center center';

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'rotateX(0deg) rotateY(0deg)';
            if (img) {
                img.style.transform = 'scale(1) translate3d(0, 0, 20px)';
                img.style.transition = 'transform 0.5s ease';
            }
        });

        card.addEventListener('mouseenter', () => {
            if (img) img.style.transition = 'none';
        });
    });
}

// --- PREMIUM STAR TRAIL CUSTOM CURSOR IMPLEMENTATION ---
function initStarTrailCursor() {
    // Disable if user prefers reduced motion or is on mobile touch screen
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || window.innerWidth < 768) {
        return;
    }

    const star = document.getElementById('star-cursor');
    const ring = document.getElementById('star-cursor-ring');
    if (!star || !ring) return;

    let mouseX = 0, mouseY = 0;
    let starX = 0, starY = 0;
    let ringX = 0, ringY = 0;
    let lastTime = 0;

    // Track mouse coordinates
    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        // Instantly snap the main star to the mouse
        star.style.left = `${mouseX}px`;
        star.style.top = `${mouseY}px`;

        // Rate-limit the sparkle star trail generation to ensure absolute buttery performance (every 30ms)
        const now = Date.now();
        if (now - lastTime > 30) {
            createSparkle(mouseX, mouseY);
            lastTime = now;
        }
    });

    // Smoothly animate the lagging dashed ring using LERP
    function tick() {
        const ease = 0.15; // Speed factor of trailing delay (smooth spring effect)
        ringX += (mouseX - ringX) * ease;
        ringY += (mouseY - ringY) * ease;

        ring.style.left = `${ringX}px`;
        ring.style.top = `${ringY}px`;

        requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);

    // Highlight-hover state transitions across all interactive triggers
    const interactiveElements = document.querySelectorAll(
        'a, button, [role="button"], .skill-badge, .about-tab, .interactive-keyword, .style-switcher span, .day-night-toggle, .nav-toggle-btn, .canvas-node, .project-image-wrapper'
    );

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            star.classList.add('hovered');
            ring.classList.add('hovered');
        });

        el.addEventListener('mouseleave', () => {
            star.classList.remove('hovered');
            ring.classList.remove('hovered');
        });
    });
}

function createSparkle(x, y) {
    const star = document.createElement('div');
    star.className = 'sparkle-star';
    star.innerHTML = '✦'; // Premium 4-pointed sparkle character

    // Generate natural physical drifting properties
    const scale = 0.4 + Math.random() * 0.7;
    const rotate = Math.random() * 360;
    const driftY = -15 - Math.random() * 30; // Floats upward
    const driftX = (Math.random() - 0.5) * 40;  // Sideways drift

    star.style.left = `${x}px`;
    star.style.top = `${y}px`;
    star.style.fontSize = `${10 + Math.random() * 6}px`;
    star.style.transform = `translate(-50%, -50%) scale(${scale}) rotate(${rotate}deg)`;

    // Inject custom animation drifting variables
    star.style.setProperty('--drift-x', `${driftX}px`);
    star.style.setProperty('--drift-y', `${driftY}px`);

    document.body.appendChild(star);

    // Garbage collector: clean DOM elements after fade-out transition completes
    setTimeout(() => {
        star.remove();
    }, 800);
}

// --- STICKY & RESPONSIVE TOP HEADER NAVIGATION ---
function initNavigation() {
    const header = document.querySelector('.site-header');
    const navToggleBtn = document.getElementById('nav-toggle-btn');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const mobileLinks = mobileMenuOverlay.querySelectorAll('.nav-item');
    const desktopLinks = document.querySelectorAll('.nav-desktop .nav-item');
    const sections = document.querySelectorAll('section');

    // Sticky Scroll Action
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile Hamburger Toggle
    navToggleBtn.addEventListener('click', () => {
        const isOpen = mobileMenuOverlay.classList.toggle('open');
        navToggleBtn.classList.toggle('open');
        document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Mobile Menu Links Clicking
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuOverlay.classList.remove('open');
            navToggleBtn.classList.remove('open');
            document.body.style.overflow = '';
        });
    });

    // Active Section State Tracking with IntersectionObserver
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const targetId = entry.target.id;

                // Desktop Nav Active State
                desktopLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${targetId}`) {
                        link.classList.add('active');
                    }
                });

                // Mobile Nav Active State
                mobileLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${targetId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(sec => observer.observe(sec));
}

// --- VISUAL LIGHT/DARK MODE TOGGLE ---
function initThemeToggle() {
    const themeBtn = document.getElementById('day-night-btn');
    const icon = themeBtn.querySelector('i');

    // System theme preference check
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        document.body.classList.add('dark');
        icon.className = 'fas fa-sun';
    } else {
        document.body.classList.remove('dark');
        icon.className = 'fas fa-moon';
    }

    // Toggle Action
    themeBtn.addEventListener('click', () => {
        const isDark = document.body.classList.toggle('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
    });
}

// --- HIGH-END HERO PLAYGROUND & DRAG PHYSICS ---
function initHeroInteractions() {
    const canvas = document.getElementById('playground-canvas');
    if (!canvas) return;

    const toys = document.querySelectorAll('.draggable-toy');
    const coordX = document.getElementById('coord-x');
    const coordY = document.getElementById('coord-y');

    let activeToy = null;
    let isDragging = false;
    let isResizing = false;
    let startX, startY, startLeft, startTop, startWidth, startHeight;

    // Connective Line elements
    const connectionLine = document.getElementById('connection-line-1');

    // Update real-time coordinates overlay
    canvas.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        const x = Math.round(e.clientX - rect.left);
        const y = Math.round(e.clientY - rect.top);
        if (coordX && coordY) {
            coordX.textContent = x;
            coordY.textContent = y;
        }
        updateConnections();
    });

    toys.forEach(toy => {
        const handle = toy.querySelector('.resize-handle');
        const designCard = toy.querySelector('.design-card');
        const codeCard = toy.querySelector('.code-card');

        // Mousedown for dragging
        toy.addEventListener('mousedown', (e) => {
            if (e.target.classList.contains('resize-handle') || e.target.classList.contains('toy-inner-btn')) return;
            activeToy = toy;
            isDragging = true;
            toy.style.zIndex = 10;
            // elevate hierarchy
            toys.forEach(t => { if (t !== toy) t.style.zIndex = 5; });

            const rect = toy.getBoundingClientRect();
            const canvasRect = canvas.getBoundingClientRect();

            startX = e.clientX;
            startY = e.clientY;
            startLeft = rect.left - canvasRect.left;
            startTop = rect.top - canvasRect.top;

            e.preventDefault();
        });

        // Mousedown for resizing
        if (handle) {
            handle.addEventListener('mousedown', (e) => {
                activeToy = toy;
                isResizing = true;
                const targetCard = designCard || codeCard;
                const cardRect = targetCard.getBoundingClientRect();

                startX = e.clientX;
                startY = e.clientY;
                startWidth = cardRect.width;
                startHeight = cardRect.height;

                e.preventDefault();
                e.stopPropagation();
            });
        }
    });

    document.addEventListener('mousemove', (e) => {
        if (!activeToy) return;

        if (isDragging) {
            const dx = e.clientX - startX;
            const dy = e.clientY - startY;

            let newLeft = startLeft + dx;
            let newTop = startTop + dy;

            // Restrict movement inside canvas boundary
            const canvasRect = canvas.getBoundingClientRect();
            const toyRect = activeToy.getBoundingClientRect();

            const maxLeft = canvasRect.width - toyRect.width;
            const maxTop = canvasRect.height - toyRect.height;

            newLeft = Math.max(0, Math.min(newLeft, maxLeft));
            newTop = Math.max(0, Math.min(newTop, maxTop));

            activeToy.style.left = `${newLeft}px`;
            activeToy.style.top = `${newTop}px`;
        }

        if (isResizing) {
            const dx = e.clientX - startX;
            const dy = e.clientY - startY;

            const designCard = activeToy.querySelector('.design-card');
            const codeCard = activeToy.querySelector('.code-card');
            const card = designCard || codeCard;
            const wSpan = activeToy.querySelector('.toy-w');
            const hSpan = activeToy.querySelector('.toy-h');

            const newWidth = Math.max(160, startWidth + dx);
            const newHeight = Math.max(100, startHeight + dy);

            if (card) {
                card.style.width = `${newWidth}px`;
                card.style.height = `${newHeight}px`;
            }
            if (wSpan) wSpan.textContent = Math.round(newWidth);
            if (hSpan) hSpan.textContent = Math.round(newHeight);
        }

        updateConnections();
    });

    document.addEventListener('mouseup', () => {
        activeToy = null;
        isDragging = false;
        isResizing = false;
    });

    // Touch support for mobile devices (Dragging only)
    toys.forEach(toy => {
        toy.addEventListener('touchstart', (e) => {
            if (e.target.classList.contains('resize-handle') || e.target.classList.contains('toy-inner-btn')) return;
            activeToy = toy;
            isDragging = true;
            toy.style.zIndex = 10;
            toys.forEach(t => { if (t !== toy) t.style.zIndex = 5; });

            const touch = e.touches[0];
            const rect = toy.getBoundingClientRect();
            const canvasRect = canvas.getBoundingClientRect();

            startX = touch.clientX;
            startY = touch.clientY;
            startLeft = rect.left - canvasRect.left;
            startTop = rect.top - canvasRect.top;
        }, { passive: true });
    });

    canvas.addEventListener('touchmove', (e) => {
        if (!activeToy || !isDragging) return;
        const touch = e.touches[0];
        const dx = touch.clientX - startX;
        const dy = touch.clientY - startY;

        let newLeft = startLeft + dx;
        let newTop = startTop + dy;

        const canvasRect = canvas.getBoundingClientRect();
        const toyRect = activeToy.getBoundingClientRect();

        const maxLeft = canvasRect.width - toyRect.width;
        const maxTop = canvasRect.height - toyRect.height;

        newLeft = Math.max(0, Math.min(newLeft, maxLeft));
        newTop = Math.max(0, Math.min(newTop, maxTop));

        activeToy.style.left = `${newLeft}px`;
        activeToy.style.top = `${newTop}px`;

        updateConnections();
    }, { passive: true });

    canvas.addEventListener('touchend', () => {
        activeToy = null;
        isDragging = false;
    });

    // Subtly connect Toy 1 & Toy 2 with a dynamic vector SVG line
    function updateConnections() {
        const toy1 = document.getElementById('toy-design-card');
        const toy2 = document.getElementById('toy-code-card');
        if (!toy1 || !toy2 || !connectionLine) return;

        const canvasRect = canvas.getBoundingClientRect();
        const t1Rect = toy1.getBoundingClientRect();
        const t2Rect = toy2.getBoundingClientRect();

        // Calculate center points relative to the canvas container
        const x1 = t1Rect.left - canvasRect.left + t1Rect.width / 2;
        const y1 = t1Rect.top - canvasRect.top + t1Rect.height / 2;

        const x2 = t2Rect.left - canvasRect.left + t2Rect.width / 2;
        const y2 = t2Rect.top - canvasRect.top + t2Rect.height / 2;

        connectionLine.setAttribute('x1', x1);
        connectionLine.setAttribute('y1', y1);
        connectionLine.setAttribute('x2', x2);
        connectionLine.setAttribute('y2', y2);
    }

    // Initialize line points
    setTimeout(updateConnections, 100);

    // Keyword interactive triggers: DESIGN, CODE, PRODUCT
    const keywords = document.querySelectorAll('.interactive-keyword');
    keywords.forEach(kw => {
        kw.addEventListener('mouseenter', () => {
            const key = kw.getAttribute('data-keyword');
            const t1 = document.getElementById('toy-design-card');
            const t2 = document.getElementById('toy-code-card');
            const badge = document.getElementById('toy-badge');

            if (key === 'design' && t1) {
                t1.style.transform = 'scale(1.1) rotate(4deg)';
                t1.style.boxShadow = '0 20px 45px rgba(236,24,57,0.25)';
            } else if (key === 'code' && t2) {
                t2.style.transform = 'scale(1.1) rotate(-4deg)';
                t2.style.boxShadow = '0 20px 45px rgba(90,226,174,0.25)';
            } else if (key === 'product' && badge) {
                badge.style.transform = 'scale(1.25) translateY(-5px)';
            }
        });

        kw.addEventListener('mouseleave', () => {
            const t1 = document.getElementById('toy-design-card');
            const t2 = document.getElementById('toy-code-card');
            const badge = document.getElementById('toy-badge');

            if (t1) {
                t1.style.transform = '';
                t1.style.boxShadow = '';
            }
            if (t2) {
                t2.style.transform = '';
                t2.style.boxShadow = '';
            }
            if (badge) {
                badge.style.transform = '';
            }
        });
    });
}

// --- FULL-SCREEN CASE STUDY MODAL WORKFLOWS ---
window.openCaseStudy = function(projectId) {
    const modal = document.getElementById('case-study-modal');
    const contentArea = document.getElementById('case-study-modal-content');
    const project = caseStudiesData[projectId];

    if (!project) return;

    let fullHtml = '';

    let skipBtnHtml = `
        <div class="skip-figma-container">
            <button class="skip-figma-btn" onclick="skipToFigma()">
                <i class="fa-brands fa-figma"></i> Figma File <i class="fa-solid fa-arrow-down"></i>
            </button>
        </div>
    `;

    if (project.customLayout) {
        modal.classList.add('sajilo-modal-mode');
        // We will insert the figma button near the title
        let modifiedHtml = project.html;

        // Let's replace the first occurance of the title class with a container that holds the title and figma button side-by-side
        if (projectId === 'sajilo') {
            modifiedHtml = modifiedHtml.replace(
                `<h1 class="sajilo-section-title" style="font-size: clamp(40px, 8vw, 80px); margin-bottom: 8px;">SAJILO</h1>`,
                `<div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px; margin-bottom: 8px;">
                    <h1 class="sajilo-section-title" style="font-size: clamp(40px, 8vw, 80px); margin: 0;">SAJILO</h1>
                    ${skipBtnHtml}
                </div>`
            );
        } else if (projectId === 'saha-yatri') {
            modifiedHtml = modifiedHtml.replace(
                `<h1 class="sajilo-section-title" style="font-size: clamp(40px, 8vw, 80px); margin-bottom: 8px;">Sajilo</h1>`,
                `<div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px; margin-bottom: 8px;">
                    <h1 class="sajilo-section-title" style="font-size: clamp(40px, 8vw, 80px); margin: 0;">Sajilo</h1>
                    ${skipBtnHtml}
                </div>`
            );
        }

        fullHtml = modifiedHtml;
    } else {
        modal.classList.remove('sajilo-modal-mode');
        // Assemble Beautiful Case Study Template
        let sectionsHtml = '';
        project.sections.forEach(sec => {
            sectionsHtml += `
                <section class="case-study-section">
                    <h3 class="case-study-section-title">${sec.title}</h3>
                    <div class="case-study-section-body">${sec.html}</div>
                </section>
            `;
        });

        fullHtml = `
            <div class="case-study-header">
                <span class="case-study-category">${project.category}</span>
                <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px; margin-bottom: 24px;">
                    <h2 class="case-study-title" style="margin: 0;">${project.title}</h2>
                    ${skipBtnHtml}
                </div>
                <p class="case-study-brief">${project.brief}</p>

                <div class="case-study-info-grid">
                    <div class="case-study-info-item">
                        <h4>My Role</h4>
                        <p>Product & UI/UX Designer</p>
                    </div>
                    <div class="case-study-info-item">
                        <h4>Enterprise / Platform</h4>
                        <p>${project.meta}</p>
                    </div>
                    <div class="case-study-info-item">
                        <h4>Timeline</h4>
                        <p>Verified Core Sprints</p>
                    </div>
                </div>
            </div>

            <div class="case-study-hero-image-wrapper">
                <img src="${project.image}" alt="${project.title}">
            </div>

            ${sectionsHtml}

            <!-- Figma Link Integration Box -->
            <div class="sajilo-figma-box">
                <div class="sajilo-figma-info">
                    <h4>Explore the Interactive Prototype</h4>
                    <p>View the complete mobile user flow and interactive screens directly inside the Figma working file.</p>
                </div>
                <a href="${project.figmaLink || 'https://www.figma.com/'}" target="_blank" class="sajilo-figma-btn">
                    <i class="fa-brands fa-figma"></i> Open Figma File
                </a>
            </div>

            <div style="text-align: center; margin-top: 80px;">
                <button onclick="closeCaseStudy()" class="btn btn-primary">Back to Portfolio <i class="fa-solid fa-arrow-left"></i></button>
            </div>
        `;
    }

    // Render & Open with transitions
    contentArea.innerHTML = fullHtml;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';

    // Smooth scroll modal back to top when opened
    modal.scrollTop = 0;
};

window.closeCaseStudy = function() {
    const modal = document.getElementById('case-study-modal');
    modal.classList.remove('open');
    modal.classList.remove('sajilo-modal-mode');
    document.body.style.overflow = '';
};

window.skipToFigma = function() {
    const modal = document.getElementById('case-study-modal');
    const figmaBox = modal.querySelector('.sajilo-figma-box');
    if (figmaBox) {
        figmaBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
};

// --- CONTACT FORM ACTION ---
function initContactForm() {
    const form = document.getElementById('contact-form-redesign');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Simple success feedback animation
        const btn = form.querySelector('button[type="submit"]');
        const originalText = btn.innerHTML;

        btn.innerHTML = 'Sending... <i class="fa-solid fa-spinner fa-spin"></i>';
        btn.style.pointerEvents = 'none';

        setTimeout(() => {
            btn.innerHTML = 'Message Sent! <i class="fa-solid fa-check"></i>';
            btn.style.backgroundColor = '#2ecc71';
            form.reset();

            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.backgroundColor = '';
                btn.style.pointerEvents = '';
            }, 3000);
        }, 1500);
    });
}

// --- GENERAL UTILITY FUNCTIONS ---
function setCurrentYear() {
    const element = document.getElementById('current-year');
    if (element) {
        element.textContent = new Date().getFullYear();
    }
}
