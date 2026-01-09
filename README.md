# PARM Digital Companion Website

## Description
The PARM Digital Companion is a web platform designed to extend the reach of the physical PARM installation. It allows users to explore digital versions of spatial analysis models, interact with datasets through dynamic charts, and visualize geographic data on interactive maps. The project serves as an educational and research tool for urban analysis, vegetation monitoring, and infrastructure resilience.

## Features
- **Interactive Maps**: Integrated Leaflet.js maps for spatial context.
- **Data Visualization**: Dynamic charts (Bar, Line, Pie, Doughnut) powered by Chart.js.
- **Narrative Storytelling**: Scroll-driven content explaining complex urban models.
- **Image Gallery**: Custom Lightbox implementation for viewing high-resolution model imagery.
- **Responsive Design**: Fully responsive layout using CSS Grid and Flexbox for all device sizes.
- **Semantic HTML**: Accessible structure using proper HTML5 tags and ARIA labels.

## Technologies Used
- **HTML5**: Semantic structure.
- **CSS3**: Custom styling with Linear Gradients, Flexbox, Grid, and Animations.
- **JavaScript (ES6+)**: Custom DOM manipulation, Event handling, and library integration.
- **External Libraries**:
  - [Leaflet.js](https://leafletjs.com/): For interactive maps.
  - [Chart.js](https://www.chartjs.org/): For data visualization.

## Setup Instructions

### Option 1: Quick View
1.  Download or clone the repository.
2.  Locate 'index.html' in the root folder.
3.  Double-click to open in your default web browser.

### Option 2: Development Environment
For the best experience (especially for loading external assets or ensuring proper path resolution), use a local development server:
1. Open the project folder in **Visual Studio Code**.
2. Install the **Live Server** extension.
3. Right-click 'index.html' and select **"Open with Live Server"**.

## Project Structure
index.html      # Landing page with background visual and intro
styles.css      # Global stylesheet with comments and Harvard referencing
lightbox.js     # Custom script for image modal functionality
page            # Sub-pages
models.html     # Interactive tools, charts, and maps tabbed interface
contact.html    # Contact form with validation

## Documentation & Referencing
The codebase contains extensive inline comments documenting the logic and citing sources for specific implementations (e.g., W3Schools for specific layouts, MDN for API usage) using Harvard Newman referencing style.

## Development Process & Technical Implementation

### 1.Development Progress
The project evolved through an iterative process starting from basic wireframing to a fully responsive interactive application. 
-**Phase 1 (Structure)**: Established semantic HTML5 skeletons for 'index.html', 'models.html', 'about.html', and 'contact.html' to ensure accessibility and proper document flow.
-**Phase 2 (Content & Logic)**: Integrated content, swapping initial placeholders with real project narratives. Implemented the core JavaScript logic for the Tab switching interface in 'models.html' and the global Lightbox script.
-**Phase 3 (Visualization)**: Integrated third-party libraries ('Chart.js' and 'Leaflet.js') to render dynamic datasets and maps, replacing static images with interactive elements.
-**Phase 4 (Refinement & Optimization)**: A major refactoring phase involved extracting all inline CSS into a centralized 'styles.css' file. This improved maintainability and code cleanliness. Finally, performance optimizations and validation logic were applied.

### 2.Problem Solving & Optimization
To ensure the application runs smoothly and robustly, several specific technical strategies were employed:

- **Performance Optimization**: 
  - **Script Deferral**: Added the 'defer' attribute to all `<script>` tags (including Leaflet, Chart.js, and custom scripts) in the head. This prevents the heavy JavaScript files from blocking the initial HTML parsing, leading to a faster First Contentful Paint (FCP).
  - **Lazy Loading**: Applied 'loading="lazy"' to off-screen images (e.g., gallery images, feature rows). This ensures bandwidth is only used when the user actually scrolls to the content.
  - **Efficient CSS**: Consolidated CSS animations (like '@keyframes fadeIn') to avoid redundancy.

- **Error Handling**:
  - **Form Validation**: In 'contact.html', standard HTML5 attributes ('required', 'type="email"') were enhanced with custom JavaScript validation. The script checks for empty fields and valid email formats before submission, providing immediate visual feedback via error messages to the user.
  - **Map Initialization Checks**: In 'models.html', the map initialization logic checks if the map instance already exists prevents "Map container is already initialized" errors when switching tabs repeatedly.

### 3.Sticky Navigation Bar
A persistent navigation experience was created using CSS Sticky positioning.
- **Implementation**: The '.top-nav' class was assigned 'position: sticky; top: 0;'.
- **Logic**: This tells the browser to treat the element as relatively positioned until it scrolls to the top of the viewport, at which point it becomes "fixed" (stuck).
- **Z-Index Management**: A high 'z-index' was applied to ensure the navigation bar stays above all other scrolling content, including images and charts.

### 4.Centralized Architecture (Global Linking)
To solve the problem of consistency—where changing a style in one place updates it everywhere—the project uses a centralized architecture:
- **Global Stylesheet ('styles.css')**: Instead of writing style rules inside every HTML file, all pages link to a single 'styles.css' file. This means changing the color scheme, font, or button style in this one file immediately propagates the change to Home, About, Models, and Contact pages.
- **Shared Scripts ('lightbox.js')**: The image viewer logic is written once in 'lightbox.js' and linked in the head of every page. This ensures that any image gallery interaction behaves identically across the entire site without code duplication.
