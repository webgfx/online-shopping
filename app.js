// PlayCanvas 3D Gaussian Splat Viewer - WebGPU with WebGL2 fallback
// Uses latest stable PlayCanvas with proper SOG format support for both backends
// Dynamically creates products with Gaussian Splatting models
// Supported file formats: .sog (compressed), .splat (standard), .ply (raw)
const products = [
    {
        id: 0,
        name: "Electric Concept Car",
        icon: "🚗",
        description: "Photogrammetry capture of a luxury coupe with glossy paint",
        price: "$129,000",
        category: "vehicles",
        sogFile: "assets/car.sog",
        status: "out-of-stock"
    },
    {
        id: 1,
        name: "Nezuko Burger",
        icon: "🍔",
        description: "KFC x Demon Slayer special edition",
        price: "$12.99",
        category: "food",
        sogFile: "assets/nezuko-burger.sog",
        status: "out-of-stock"
    },
    {
        id: 2,
        name: "Birthday Cake",
        icon: "🎂",
        description: "Hungarian Dobosh cake with chocolate",
        price: "$24.99",
        category: "food",
        sogFile: "assets/birthday-cake.sog",
        status: "out-of-stock"
    },
    {
        id: 3,
        name: "Building Blocks",
        icon: "🧱",
        description: "Colorful building block set",
        price: "$34.99",
        category: "toys",
        sogFile: "assets/building-blocks.sog",
        status: "out-of-stock"
    },
    {
        id: 4,
        name: "Orange Juice",
        icon: "🧃",
        description: "Fresh squeezed orange juice",
        price: "$4.99",
        category: "beverages",
        sogFile: "assets/orange-juice.sog",
        status: "out-of-stock"
    },
    {
        id: 5,
        name: "Cola Bottle",
        icon: "🥤",
        description: "Classic cola beverage",
        price: "$2.99",
        category: "beverages",
        sogFile: "assets/cola-bottle.sog",
        status: "out-of-stock"
    },
    {
        id: 6,
        name: "Coffee Cup",
        icon: "☕",
        description: "Premium coffee blend",
        price: "$5.99",
        category: "beverages",
        sogFile: "assets/coffee-cup.sog",
        status: "out-of-stock"
    },
    {
        id: 7,
        name: "Race Car",
        icon: "🏎️",
        description: "High-speed racing car toy",
        price: "$24.99",
        category: "toys",
        sogFile: "assets/race-car.sog",
        status: "out-of-stock"
    },
    {
        id: 8,
        name: "Dinosaur Figure",
        icon: "🦕",
        description: "Realistic T-Rex action figure",
        price: "$18.99",
        category: "toys",
        sogFile: "assets/dinosaur.sog",
        status: "out-of-stock"
    },
    {
        id: 9,
        name: "Puzzle Set",
        icon: "🧩",
        description: "100-piece jigsaw puzzle",
        price: "$14.99",
        category: "toys",
        sogFile: "assets/puzzle-set.sog",
        status: "out-of-stock"
    },
    {
        id: 10,
        name: "Green Tea",
        icon: "🍵",
        description: "Organic green tea blend",
        price: "$6.99",
        category: "beverages",
        sogFile: "assets/green-tea.sog",
        status: "out-of-stock"
    },
    {
        id: 11,
        name: "Smoothie",
        icon: "🥤",
        description: "Mixed berry smoothie",
        price: "$7.99",
        category: "beverages",
        sogFile: "assets/smoothie.sog",
        status: "out-of-stock"
    },
    {
        id: 12,
        name: "Energy Drink",
        icon: "⚡",
        description: "Boost your energy naturally",
        price: "$3.99",
        category: "beverages",
        sogFile: "assets/energy-drink.sog",
        status: "out-of-stock"
    },
    {
        id: 13,
        name: "Action Figure",
        icon: "🦸",
        description: "Superhero action figure",
        price: "$22.99",
        category: "toys",
        sogFile: "assets/action-figure.sog",
        status: "out-of-stock"
    },
    {
        id: 14,
        name: "Doll House",
        icon: "🏠",
        description: "Three-story doll house",
        price: "$49.99",
        category: "toys",
        sogFile: "assets/doll-house.sog",
        status: "out-of-stock"
    },
    {
        id: 15,
        name: "Water Bottle",
        icon: "💧",
        description: "Purified spring water",
        price: "$1.99",
        category: "beverages",
        sogFile: "assets/water-bottle.sog",
        status: "out-of-stock"
    },
    {
        id: 16,
        name: "Robot Toy",
        icon: "🤖",
        description: "Interactive robot with LED lights",
        price: "$29.99",
        category: "toys",
        sogFile: "assets/robot-toy.sog",
        status: "out-of-stock"
    },
    {
        id: 17,
        name: "Teddy Bear",
        icon: "🧸",
        description: "Soft and cuddly teddy bear",
        price: "$19.99",
        category: "toys",
        sogFile: "assets/teddy-bear.sog",
        status: "out-of-stock"
    },
    {
        id: 18,
        name: "Chocolate Box",
        icon: "🍫",
        description: "Assorted premium chocolates",
        price: "$18.99",
        category: "food",
        sogFile: "assets/chocolate-box.sog",
        status: "out-of-stock"
    },
    {
        id: 19,
        name: "Pizza Slice",
        icon: "🍕",
        description: "Fresh pepperoni pizza slice",
        price: "$4.99",
        category: "food",
        sogFile: "assets/pizza-slice.sog",
        status: "out-of-stock"
    },
    {
        id: 20,
        name: "Ice Cream",
        icon: "🍦",
        description: "Vanilla soft serve ice cream",
        price: "$3.99",
        category: "food",
        sogFile: "assets/ice-cream.sog",
        status: "out-of-stock"
    },
    {
        id: 21,
        name: "Sushi Set",
        icon: "🍣",
        description: "Fresh salmon and tuna sushi",
        price: "$16.99",
        category: "food",
        sogFile: "assets/sushi-set.sog",
        status: "out-of-stock"
    },
    {
        id: 23,
        name: "Mountain Bicycle",
        icon: "🚴",
        description: "High-performance mountain bike with suspension",
        price: "$1,299",
        category: "vehicles",
        sogFile: "assets/bicycle.ply",  // Convert .splat to .ply for PlayCanvas compatibility
        status: "available",
        dateAdded: "2025-11-16"
    },
    {
        id: 24,
        name: "3 Kanzashi",
        icon: "🎎",
        description: "Traditional Japanese hair ornament with three decorative elements",
        price: "$89.99",
        category: "accessories",
        sogFile: "assets/3kanzashi.ply",
        status: "available",
        dateAdded: "2025-11-16"
    }
];

// Global references
let app = null;
let camera = null;
let currentEntity = null;
let cameraScript = null;

// Initialize PlayCanvas with WebGPU preferred, WebGL2 fallback
async function initPlayCanvas() {
    const canvas = document.getElementById('application-canvas');
    const container = document.getElementById('viewer-canvas-container');

    // Ensure the canvas has a valid size even before the modal is visible
    resizeCanvasToContainer(true);

    console.log('Initializing PlayCanvas 2.1.0 with automatic backend selection (WebGPU preferred, WebGL2 fallback)...');

    try {
        if (typeof pc === 'undefined') {
            throw new Error('PlayCanvas library not loaded');
        }

        // Create graphics device with automatic fallback
        const graphicsDevice = await createGraphicsDevice(canvas);

        // Create the PlayCanvas application
        app = new pc.Application(canvas, {
            graphicsDevice,
            mouse: new pc.Mouse(canvas),
            touch: new pc.TouchDevice(canvas),
            keyboard: new pc.Keyboard(window)
        });

        const isWebGPU = app.graphicsDevice.isWebGPU || (app.graphicsDevice.constructor.name.includes('WebGpu'));
        const backendName = isWebGPU ? 'WebGPU' : 'WebGL2';
        console.log(`✅ PlayCanvas application created with ${backendName} backend`);

        console.log('✅ Graphics backend initialized');

        ensureInputDevices(canvas);

        // Configure canvas behaviour
        app.setCanvasFillMode(pc.FILLMODE_FILL_WINDOW);
        app.setCanvasResolution(pc.RESOLUTION_AUTO);

        // Keep canvas sized correctly even when modal toggles visibility
        const resizeObserver = new ResizeObserver(() => resizeCanvasToContainer());
        if (container) {
            resizeObserver.observe(container);
        }
        window.addEventListener('resize', () => resizeCanvasToContainer());

        // Start the application
        app.start();

        console.log('✅ PlayCanvas application started');

        // Set up the scene
        setupScene();

    } catch (error) {
        console.error('PlayCanvas initialization error:', error);
        throw new Error('Failed to initialize 3D viewer: ' + error.message);
    }
}

// Set up the 3D scene
function setupScene() {
    if (!app) {
        console.error('PlayCanvas app not initialized yet');
        return;
    }

    // Create camera entity
    const cameraEntity = new pc.Entity('camera');
    cameraEntity.addComponent('camera', {
        clearColor: new pc.Color(0.1, 0.1, 0.15),
        farClip: 100,
        fov: 60
    });
    cameraEntity.setPosition(0, 1.5, 5);
    cameraEntity.lookAt(0, 0, 0);
    app.root.addChild(cameraEntity);
    camera = cameraEntity;

    // Add orbit camera controls
    addOrbitCamera(cameraEntity);

    // Create multiple lights for better illumination
    const light1 = new pc.Entity('light1');
    light1.addComponent('light', {
        type: 'directional',
        color: new pc.Color(1, 1, 1),
        intensity: 1.0
    });
    light1.setEulerAngles(45, 30, 0);
    app.root.addChild(light1);

    const light2 = new pc.Entity('light2');
    light2.addComponent('light', {
        type: 'directional',
        color: new pc.Color(0.8, 0.8, 1),
        intensity: 0.5
    });
    light2.setEulerAngles(-45, -30, 0);
    app.root.addChild(light2);

    // Set ambient light on the scene
    app.scene.ambientLight = new pc.Color(0.4, 0.4, 0.5);

    const isWebGPU = app.graphicsDevice.isWebGPU || (app.graphicsDevice.constructor.name.includes('WebGpu'));
    const backendName = isWebGPU ? 'WebGPU' : 'WebGL2';
    console.log(`✅ PlayCanvas scene initialized with ${backendName}`);
}

// Ensure input devices exist
function ensureInputDevices(canvas) {
    if (!app) {
        return;
    }

    if (!app.mouse) {
        try {
            app.mouse = new pc.Mouse(canvas);
            console.log('🔧 Mouse device created');
        } catch (err) {
            console.warn('Failed to create mouse device:', err);
        }
    }

    if (!app.touch) {
        try {
            app.touch = new pc.TouchDevice(canvas);
            console.log('🔧 Touch device created');
        } catch (err) {
            console.warn('Failed to create touch device:', err);
        }
    }

    if (!app.keyboard) {
        try {
            app.keyboard = new pc.Keyboard(window);
            console.log('🔧 Keyboard device created');
        } catch (err) {
            console.warn('Failed to create keyboard device:', err);
        }
    }
}

async function createGraphicsDevice(canvas) {
    if (!pc.createGraphicsDevice) {
        throw new Error('This PlayCanvas build does not expose pc.createGraphicsDevice.');
    }

    const options = {
        preferWebGl2: true,
        preferWebGpu: true,
        deviceTypes: ['webgpu', 'webgl2'],
        powerPreference: 'high-performance'
        // Omit glslangUrl and twgslUrl to use PlayCanvas built-in CDN URLs
    };

    const graphicsDevice = await pc.createGraphicsDevice(canvas, options);

    if (!graphicsDevice) {
        throw new Error('Failed to create graphics device. Neither WebGPU nor WebGL2 are available.');
    }

    // Determine backend type (minified names in production)
    const isWebGPU = graphicsDevice.isWebGPU || (graphicsDevice.constructor.name.includes('WebGpu'));
    const backendName = isWebGPU ? 'WebGPU' : 'WebGL2';
    console.log(`✅ Graphics device ready: ${backendName}`);
    return graphicsDevice;
}

function resizeCanvasToContainer(forceFallback = false) {
    const canvas = document.getElementById('application-canvas');
    const container = document.getElementById('viewer-canvas-container');

    if (!canvas || !container) {
        return;
    }

    let width = container.clientWidth;
    let height = container.clientHeight;

    if ((width <= 0 || height <= 0) && forceFallback) {
        width = 960;
        height = 600;
        container.style.minHeight = `${height}px`;
    }

    if (width <= 0 || height <= 0) {
        return;
    }

    if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
    }

    if (app && app.graphicsDevice) {
        app.resizeCanvas(width, height);
    }
}

// Add orbit camera controls
function addOrbitCamera(cameraEntity) {
    if (!app?.mouse) {
        console.warn('Mouse input not available; creating fallback device.');
        ensureInputDevices(app.graphicsDevice?.canvas || cameraEntity?.canvas);
    }

    if (!app?.mouse) {
        console.error('Mouse input still unavailable; orbit controls disabled.');
        return;
    }

    const orbitCamera = {
        distance: 5,
        distanceMin: 2,
        distanceMax: 20,
        pitch: 15,
        yaw: 0,
        target: new pc.Vec3(0, 0, 0),

        update: function() {
            const position = new pc.Vec3();
            const pitchRad = this.pitch * pc.math.DEG_TO_RAD;
            const yawRad = this.yaw * pc.math.DEG_TO_RAD;

            position.x = this.distance * Math.sin(yawRad) * Math.cos(pitchRad);
            position.y = this.distance * Math.sin(pitchRad);
            position.z = this.distance * Math.cos(yawRad) * Math.cos(pitchRad);

            position.add(this.target);
            cameraEntity.setPosition(position);
            cameraEntity.lookAt(this.target);
        },

        reset: function() {
            this.distance = 5;
            this.pitch = 15;
            this.yaw = 0;
            this.target.set(0, 0, 0);
            this.update();
        }
    };

    orbitCamera.update();

    // Mouse controls
    let isRotating = false;
    let isPanning = false;
    let lastX = 0;
    let lastY = 0;

    app.mouse.on(pc.EVENT_MOUSEDOWN, (event) => {
        if (event.button === pc.MOUSEBUTTON_LEFT) {
            isRotating = true;
        } else if (event.button === pc.MOUSEBUTTON_RIGHT) {
            isPanning = true;
        }
        lastX = event.x;
        lastY = event.y;
    });

    app.mouse.on(pc.EVENT_MOUSEMOVE, (event) => {
        if (isRotating) {
            const dx = event.x - lastX;
            const dy = event.y - lastY;
            orbitCamera.yaw -= dx * 0.3;
            orbitCamera.pitch = pc.math.clamp(orbitCamera.pitch + dy * 0.3, -90, 90);
            orbitCamera.update();
        } else if (isPanning) {
            const dx = event.x - lastX;
            const dy = event.y - lastY;
            const right = cameraEntity.right.clone();
            const up = cameraEntity.up.clone();
            right.mulScalar(-dx * 0.01);
            up.mulScalar(dy * 0.01);
            orbitCamera.target.add(right);
            orbitCamera.target.add(up);
            orbitCamera.update();
        }
        lastX = event.x;
        lastY = event.y;
    });

    app.mouse.on(pc.EVENT_MOUSEUP, () => {
        isRotating = false;
        isPanning = false;
    });

    app.mouse.on(pc.EVENT_MOUSEWHEEL, (event) => {
        orbitCamera.distance = pc.math.clamp(
            orbitCamera.distance - event.wheel * 0.5,
            orbitCamera.distanceMin,
            orbitCamera.distanceMax
        );
        orbitCamera.update();
        event.event.preventDefault();
    });

    cameraScript = orbitCamera;
}

// Load Gaussian Splat file (supports .sog, .splat, .ply formats)
function loadSOGFile(filePath, productName) {
    // Check if app is initialized
    if (!app) {
        console.error('PlayCanvas app not initialized yet');
        showLoading(false);
        return;
    }

    showLoading(true);

    // Remove previous entity if exists
    if (currentEntity) {
        currentEntity.destroy();
        currentEntity = null;
    }

    // Validate filePath
    if (!filePath) {
        console.error('Invalid file path');
        showDemoPlaceholder(productName);
        return;
    }

    // Detect file format from extension
    const fileExt = filePath.split('.').pop().toLowerCase();
    const supportedFormats = ['sog', 'splat', 'ply'];

    if (!supportedFormats.includes(fileExt)) {
        console.error(`Unsupported file format: .${fileExt}. Supported formats: ${supportedFormats.join(', ')}`);
        showDemoPlaceholder(productName);
        return;
    }

    // Check if this is a remote URL or local file
    const isRemoteUrl = filePath.startsWith('http://') || filePath.startsWith('https://');
    console.log(`Loading ${isRemoteUrl ? 'remote' : 'local'} Gaussian Splat (.${fileExt}): ${filePath}`);

    if (fileExt === 'sog' || fileExt === 'ply') {
        const fileSizeMB = filePath.includes('car') ? 15 : 0;
        if (fileSizeMB > 5) {
            console.warn('⚠️ Large files (>5MB) may cause browser performance issues or loading errors');
        }
    }

    // Create a new entity for the Gaussian Splat
    const entity = new pc.Entity(productName);

    try {
        // Add GSplat component if available in PlayCanvas Engine
        if (pc.GSplatComponent) {
            entity.addComponent('gsplat');

            // Load the asset from URL or relative path
            // PlayCanvas auto-detects format based on file extension
            app.assets.loadFromUrl(filePath, 'gsplat', (err, asset) => {
                if (err) {
                    console.error(`Failed to load Gaussian Splat (.${fileExt}) from: ${filePath}`, err);
                    showDemoPlaceholder(productName);
                    return;
                }

                // Assign the asset to the component
                entity.gsplat.asset = asset.id;
                app.root.addChild(entity);
                currentEntity = entity;

                // Reset camera position
                if (cameraScript) {
                    cameraScript.reset();
                }

                showLoading(false);
                console.log(`✅ Successfully loaded ${fileExt.toUpperCase()} Gaussian Splat: ${productName}`);
            });
        } else {
            // Fallback: GSplat component not available
            console.warn('GSplat component not available in this PlayCanvas build - Using placeholder mode');
            showDemoPlaceholder(productName);
        }
    } catch (error) {
        console.error('Error setting up GSplat:', error);
        showDemoPlaceholder(productName);
    }
}

// Show demo placeholder when actual SOG files are not available
function showDemoPlaceholder(productName) {
    showLoading(false);

    // Create a simple placeholder geometry
    if (currentEntity) {
        currentEntity.destroy();
    }

    const entity = new pc.Entity(productName);
    entity.addComponent('model', {
        type: 'box'
    });

    // Add a material
    const material = new pc.StandardMaterial();
    material.diffuse = new pc.Color(0.3, 0.5, 0.8);
    material.update();
    entity.model.material = material;

    entity.setPosition(0, 0, 0);
    entity.setLocalScale(1, 1, 1);

    app.root.addChild(entity);
    currentEntity = entity;

    // Add rotation animation
    entity.addComponent('script');
    entity.script.create('rotate', {
        attributes: {
            speed: 30
        }
    });

    // Simple rotation script
    app.on('update', (dt) => {
        if (entity && entity.enabled) {
            entity.rotate(0, dt * 30, 0);
        }
    });

    console.log(`Showing demo placeholder for: ${productName}`);
    console.log('Note: To see actual Gaussian Splat models, add .sog files to the assets folder.');
}

// UI Helper functions
function showLoading(show) {
    const loader = document.getElementById('loading-indicator');
    if (show) {
        loader.classList.remove('hidden');
    } else {
        loader.classList.add('hidden');
    }
}

function showModal() {
    const modal = document.getElementById('viewer-modal');
    modal.classList.remove('hidden');

    // Defer resize until modal is visible in the layout
    requestAnimationFrame(() => {
        resizeCanvasToContainer(true);
        if (app) {
            app.resizeCanvas();
        }
    });
}

function hideModal() {
    const modal = document.getElementById('viewer-modal');
    modal.classList.add('hidden');
}

// Update product info in UI
function updateProductInfo(product) {
    document.getElementById('product-title').textContent = product.name;
    document.getElementById('product-description').textContent =
        `${product.description} - ${product.price}`;
}

// Render products in grid (reversed order - newest first)
function renderProducts() {
    const productList = document.getElementById('product-list');

    // Reverse the array to show newest products (highest ID) first
    const sortedProducts = [...products].reverse();

    sortedProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.dataset.productId = product.id;

        // Add "NEW" badge and date if product was added recently (has dateAdded)
        const isNew = product.dateAdded ? true : false;
        const newBadge = isNew ? '<span class="new-badge">NEW</span>' : '';
        const dateAddedText = product.dateAdded ? `<p class="date-added">Added: ${product.dateAdded}</p>` : '';

        card.innerHTML = `
            <span class="product-icon">${product.icon}</span>
            <h3>${product.name}${newBadge}</h3>
            <p>${product.description}</p>
            <p class="product-price">${product.price}</p>
            ${dateAddedText}
            <span class="product-status status-${product.status}">
                ${product.status === 'sample' ? '📦 Demo' : product.status === 'out-of-stock' ? '❌ Out of Stock' : '✅ Available'}
            </span>
        `;

        card.addEventListener('click', () => {
            // Show modal
            showModal();

            // Update product info
            updateProductInfo(product);

            // Load the 3D model
            loadSOGFile(product.sogFile, product.name);
        });

        productList.appendChild(card);
    });
}

// Reset camera view
function setupResetButton() {
    const resetBtn = document.getElementById('reset-camera');
    resetBtn.addEventListener('click', () => {
        if (cameraScript) {
            cameraScript.reset();
        }
    });
}

// Setup close modal button
function setupModalControls() {
    const closeBtn = document.getElementById('close-modal');
    const modal = document.getElementById('viewer-modal');

    closeBtn.addEventListener('click', () => {
        hideModal();
    });

    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            hideModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            hideModal();
        }
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', async () => {
    console.log('🚀 Initializing 3D Shopping Demo with WebGPU...');

    // Render products
    renderProducts();

    // Setup reset button
    setupResetButton();

    // Setup modal controls
    setupModalControls();

    // Wait for PlayCanvas to load, then initialize
    console.log('⏳ Waiting for PlayCanvas library to load...');
    const checkPlayCanvas = setInterval(() => {
        if (typeof pc !== 'undefined') {
            clearInterval(checkPlayCanvas);
            console.log('✅ PlayCanvas library detected');

            // Initialize PlayCanvas with error handling
            initPlayCanvas().then(() => {
                console.log('✅ Application ready!');
                const isWebGPU = app?.graphicsDevice?.isWebGPU || (app?.graphicsDevice?.constructor?.name?.includes('WebGpu'));
                const backend = isWebGPU ? 'WebGPU' : 'WebGL2';
                console.log('Graphics Backend:', backend);
                console.log('Bundled .sog files found in assets/. Replace them with your own splats to customize each product.');
            }).catch((error) => {
                console.error('❌ Error initializing PlayCanvas:', error);
                alert('Failed to initialize 3D viewer. Error: ' + error.message);
            });
        }
    }, 100);

    // Timeout after 10 seconds
    setTimeout(() => {
        clearInterval(checkPlayCanvas);
        if (typeof pc === 'undefined') {
            console.error('❌ PlayCanvas library not loaded after 10 seconds!');
            alert('Failed to load PlayCanvas library. Please check your internet connection and refresh the page.');
        }
    }, 10000);
});
