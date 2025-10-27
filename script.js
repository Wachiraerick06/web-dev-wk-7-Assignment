/* ============================================
   JavaScript Functions - Scope, Parameters & Return Values
   Interactive Web Experience - Assignment
   ============================================ */

// ============================================
// PART 2: JAVASCRIPT FUNCTIONS DEMONSTRATION
// ============================================

// Global scope variable - accessible throughout the entire script
let globalCounter = 0;
const GLOBAL_CONSTANT = "This is a global constant";

/**
 * Function demonstrating parameters and return values
 * Takes two numbers and returns various mathematical operations
 */
function performCalculations(num1, num2) {
    // Local scope variables - only accessible within this function
    const addition = num1 + num2;
    const subtraction = num1 - num2;
    const multiplication = num1 * num2;
    const division = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
    
    // Return an object with multiple values
    return {
        addition: addition,
        subtraction: subtraction,
        multiplication: multiplication,
        division: division,
        average: (num1 + num2) / 2,
        max: Math.max(num1, num2),
        min: Math.min(num1, num2)
    };
}

/**
 * Function demonstrating scope - local vs global
 * Shows how local variables shadow global ones
 */
function demonstrateScope() {
    // Local variable with same name as global - this shadows the global
    let globalCounter = 100; // This is local, not the global one
    
    // Local scope variable
    let localVariable = "I'm local to this function";
    
    // Accessing global variable (not the local one)
    window.globalCounter += 1;
    
    const scopeInfo = {
        localCounter: globalCounter, // This is the local variable
        actualGlobalCounter: window.globalCounter, // This is the global variable
        localVariable: localVariable,
        globalConstant: GLOBAL_CONSTANT,
        message: "Local variables shadow global ones with the same name!"
    };
    
    return scopeInfo;
}

/**
 * Function with default parameters and rest parameters
 * Demonstrates modern JavaScript function features
 */
function processNumbers(firstNum = 0, secondNum = 0, ...additionalNumbers) {
    const allNumbers = [firstNum, secondNum, ...additionalNumbers];
    
    return {
        total: allNumbers.reduce((sum, num) => sum + num, 0),
        count: allNumbers.length,
        average: allNumbers.reduce((sum, num) => sum + num, 0) / allNumbers.length,
        sorted: [...allNumbers].sort((a, b) => a - b),
        max: Math.max(...allNumbers),
        min: Math.min(...allNumbers)
    };
}

/**
 * Higher-order function that takes a function as parameter
 * Demonstrates functional programming concepts
 */
function executeWithDelay(callback, delay = 1000) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const result = callback();
            resolve(result);
        }, delay);
    });
}

/**
 * Function that returns another function (closure)
 * Demonstrates closure and function factories
 */
function createMultiplier(factor) {
    // This function has access to the 'factor' parameter even after createMultiplier returns
    return function(number) {
        return number * factor;
    };
}

// ============================================
// PART 3: CSS + JAVASCRIPT INTEGRATION
// ============================================

/**
 * Function to trigger CSS animations dynamically
 * Demonstrates adding/removing CSS classes
 */
function animateBox(animationType) {
    const box = document.getElementById('dynamic-box');
    
    // Remove any existing animation classes
    box.classList.remove('bounce', 'shake', 'glow');
    
    // Add the new animation class
    box.classList.add(animationType);
    
    // Remove the animation class after it completes
    setTimeout(() => {
        box.classList.remove(animationType);
    }, 600);
}

/**
 * Function to reset box to original state
 */
function resetBox() {
    const box = document.getElementById('dynamic-box');
    box.classList.remove('bounce', 'shake', 'glow');
    box.style.boxShadow = '';
}

/**
 * Function to flip card using CSS transforms
 * Demonstrates toggling CSS classes
 */
function flipCard() {
    const card = document.getElementById('flip-card');
    card.classList.toggle('flipped');
    
    // Add a small delay for better UX
    setTimeout(() => {
        if (card.classList.contains('flipped')) {
            console.log('Card flipped to back!');
        } else {
            console.log('Card flipped to front!');
        }
    }, 300);
}

/**
 * Function to open modal with CSS animations
 * Demonstrates adding CSS classes for animations
 */
function openModal() {
    const modal = document.getElementById('modal-overlay');
    modal.classList.add('active');
    
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
}

/**
 * Function to close modal with CSS animations
 * Demonstrates removing CSS classes
 */
function closeModal() {
    const modal = document.getElementById('modal-overlay');
    modal.classList.remove('active');
    
    // Restore body scroll
    document.body.style.overflow = 'auto';
}

/**
 * Function to control loading animation
 * Demonstrates dynamic CSS class management
 */
function startLoading() {
    const spinner = document.getElementById('loading-spinner');
    const text = document.getElementById('loading-text');
    
    spinner.classList.add('active');
    text.textContent = 'Loading...';
    text.style.color = '#667eea';
    
    // Simulate loading completion after 3 seconds
    setTimeout(() => {
        stopLoading();
    }, 3000);
}

function stopLoading() {
    const spinner = document.getElementById('loading-spinner');
    const text = document.getElementById('loading-text');
    
    spinner.classList.remove('active');
    text.textContent = 'Loading complete!';
    text.style.color = '#28a745';
    
    // Reset text after 2 seconds
    setTimeout(() => {
        text.textContent = 'Ready to load...';
        text.style.color = '#667eea';
    }, 2000);
}

/**
 * Function to calculate and display results
 * Integrates mathematical functions with DOM manipulation
 */
function calculateResults() {
    const num1 = parseFloat(document.getElementById('num1').value) || 0;
    const num2 = parseFloat(document.getElementById('num2').value) || 0;
    
    // Use our calculation function
    const results = performCalculations(num1, num2);
    
    // Display results in a formatted way
    const resultsDiv = document.getElementById('calculation-results');
    resultsDiv.innerHTML = `
        <h4>Calculation Results:</h4>
        <p><strong>Addition:</strong> ${results.addition}</p>
        <p><strong>Subtraction:</strong> ${results.subtraction}</p>
        <p><strong>Multiplication:</strong> ${results.multiplication}</p>
        <p><strong>Division:</strong> ${results.division}</p>
        <p><strong>Average:</strong> ${results.average}</p>
        <p><strong>Maximum:</strong> ${results.max}</p>
        <p><strong>Minimum:</strong> ${results.min}</p>
    `;
    
    // Add a subtle animation to the results
    resultsDiv.style.transform = 'scale(0.95)';
    setTimeout(() => {
        resultsDiv.style.transform = 'scale(1)';
    }, 100);
}

/**
 * Function to demonstrate scope concepts
 * Shows local vs global variable behavior
 */
function demonstrateScope() {
    const scopeInfo = demonstrateScope();
    const resultsDiv = document.getElementById('scope-results');
    
    resultsDiv.innerHTML = `
        <h4>Scope Demonstration:</h4>
        <p><strong>Local Counter:</strong> ${scopeInfo.localCounter}</p>
        <p><strong>Global Counter:</strong> ${scopeInfo.actualGlobalCounter}</p>
        <p><strong>Local Variable:</strong> ${scopeInfo.localVariable}</p>
        <p><strong>Global Constant:</strong> ${scopeInfo.globalConstant}</p>
        <p><strong>Message:</strong> ${scopeInfo.message}</p>
    `;
    
    // Add animation to results
    resultsDiv.style.transform = 'scale(0.95)';
    setTimeout(() => {
        resultsDiv.style.transform = 'scale(1)';
    }, 100);
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Function to add smooth scrolling to page
 * Demonstrates DOM manipulation and event handling
 */
function smoothScrollTo(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

/**
 * Function to create a debounced version of any function
 * Demonstrates advanced JavaScript concepts
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Function to add click effects to buttons
 * Demonstrates event handling and CSS manipulation
 */
function addClickEffect(button) {
    button.style.transform = 'scale(0.95)';
    setTimeout(() => {
        button.style.transform = 'scale(1)';
    }, 150);
}

// ============================================
// EVENT LISTENERS AND INITIALIZATION
// ============================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Interactive Web Experience loaded successfully!');
    
    // Add click effects to all buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            addClickEffect(this);
        });
    });
    
    // Add keyboard support for modal
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
    
    // Add click outside modal to close
    document.getElementById('modal-overlay').addEventListener('click', function(event) {
        if (event.target === this) {
            closeModal();
        }
    });
    
    // Initialize with some demo values
    document.getElementById('num1').value = 15;
    document.getElementById('num2').value = 7;
    
    console.log('All event listeners attached successfully!');
});

// ============================================
// DEMONSTRATION OF FUNCTION CONCEPTS
// ============================================

// Example of using the multiplier factory function
const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log('Function factory example:');
console.log('double(5) =', double(5)); // Returns 10
console.log('triple(5) =', triple(5)); // Returns 15

// Example of using the processNumbers function with different parameters
console.log('Process numbers example:');
console.log(processNumbers(10, 20, 30, 40, 50));

// Example of using executeWithDelay
executeWithDelay(() => {
    console.log('This message appears after 1 second delay!');
    return 'Delayed execution complete';
}, 1000).then(result => {
    console.log('Promise result:', result);
});

// Global scope demonstration
console.log('Global scope demonstration:');
console.log('Initial global counter:', globalCounter);
console.log('Global constant:', GLOBAL_CONSTANT);
