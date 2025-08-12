"use client"

// We import useState from React to manage the state of our navigation
// State is like a variable that can change and cause our component to re-render
import { useState } from "react"
// We import icons from lucide-react for our menu button
import { Menu, X, Home, User, Settings, Mail } from "lucide-react"

export default function HomePage() {
  // This creates a state variable called 'isNavOpen' with initial value 'false'
  // 'setIsNavOpen' is the function we use to change this value
  // When isNavOpen is true, the navigation will be visible
  // When isNavOpen is false, the navigation will be hidden
  const [isNavOpen, setIsNavOpen] = useState(false)

  // This function toggles the navigation between open and closed
  // It takes the current value of isNavOpen and flips it to the opposite
  const toggleNavigation = () => {
    setIsNavOpen(!isNavOpen) // The ! means "not", so if it's true, make it false, and vice versa
  }

  return (
    // This is the main container for our entire app
    // 'min-h-screen' makes it at least as tall as the screen
    // 'bg-gray-50' gives it a light gray background color
    <div className="min-h-screen bg-gray-50">
      {/* HEADER SECTION */}
      {/* This is the top bar of our app that contains the menu button and title */}
      <header className="bg-white shadow-md px-4 py-3 flex items-center justify-between">
        {/* Menu Toggle Button */}
        {/* This button will show/hide our navigation when clicked */}
        <button
          onClick={toggleNavigation} // When clicked, run our toggleNavigation function
          className="p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
          // 'hover:bg-gray-100' changes background color when you hover over it
          // 'transition-colors duration-200' makes the color change smooth
        >
          {/* This shows different icons based on whether nav is open or closed */}
          {/* If isNavOpen is true, show X icon, otherwise show Menu icon */}
          {isNavOpen ? <X className="h-6 w-6 text-gray-600" /> : <Menu className="h-6 w-6 text-gray-600" />}
        </button>

        {/* App Title */}
        <h1 className="text-xl font-bold text-gray-800">My Simple App</h1>

        {/* Empty div to help center the title (flexbox spacing) */}
        <div className="w-10"></div>
      </header>

      <div className="flex">
        {/* NAVIGATION SIDEBAR */}
        {/* This navigation will slide in and out based on isNavOpen state */}
        <nav
          className={`
          fixed top-16 left-0 h-full bg-white shadow-lg z-50 w-64 transform transition-transform duration-300 ease-in-out
          ${isNavOpen ? "translate-x-0" : "-translate-x-full"}
        `}
        >
          {/* 
          Let me explain the className above:
          - 'fixed' positions it relative to the viewport
          - 'top-16' positions it below our header (16 = 4rem = 64px)
          - 'left-0' aligns it to the left edge
          - 'h-full' makes it full height
          - 'bg-white shadow-lg' gives it white background and shadow
          - 'z-50' puts it above other elements
          - 'w-64' sets width to 16rem (256px)
          - 'transform transition-transform duration-300 ease-in-out' enables smooth sliding animation
          - The ${} part is conditional: if isNavOpen is true, show it (translate-x-0), 
            if false, hide it by moving it left (-translate-x-full)
          */}

          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Navigation</h2>

            {/* Navigation Links */}
            {/* Each link is a button that you can click */}
            <ul className="space-y-2">
              {/* 'space-y-2' adds vertical spacing between list items */}

              <li>
                <button className="w-full flex items-center px-3 py-2 text-left text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors duration-200">
                  <Home className="h-5 w-5 mr-3" />
                  Home
                </button>
              </li>

              <li>
                <button className="w-full flex items-center px-3 py-2 text-left text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors duration-200">
                  <User className="h-5 w-5 mr-3" />
                  Profile
                </button>
              </li>

              <li>
                <button className="w-full flex items-center px-3 py-2 text-left text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors duration-200">
                  <Settings className="h-5 w-5 mr-3" />
                  Settings
                </button>
              </li>

              <li>
                <button className="w-full flex items-center px-3 py-2 text-left text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors duration-200">
                  <Mail className="h-5 w-5 mr-3" />
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </nav>

        {/* MAIN CONTENT AREA */}
        {/* This is where the main content of your app goes */}
        <main className="flex-1 p-6">
          {/* 'flex-1' makes this take up all remaining space */}

          {/* Welcome Section */}
          <div className="max-w-4xl mx-auto">
            {/* 'max-w-4xl' limits the width, 'mx-auto' centers it */}

            <div className="bg-white rounded-lg shadow-md p-8 mb-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Your First React App! 🎉</h2>

              <p className="text-gray-600 text-lg mb-4">This is a simple React application that demonstrates:</p>

              {/* Feature List */}
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                <li>A toggleable navigation sidebar</li>
                <li>Responsive design with Tailwind CSS</li>
                <li>State management with React hooks</li>
                <li>Smooth animations and transitions</li>
                <li>Clean, modern UI components</li>
              </ul>

              {/* Instructions */}
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                <p className="text-blue-800">
                  <strong>Try it out:</strong> Click the menu button (☰) in the top-left corner to open and close the
                  navigation sidebar!
                </p>
              </div>
            </div>

            {/* Code Explanation Section */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">How This Works (For Beginners)</h3>

              <div className="space-y-4 text-gray-600">
                <div>
                  <h4 className="font-semibold text-gray-800">1. State Management:</h4>
                  <p>
                    We use <code className="bg-gray-100 px-2 py-1 rounded">useState</code> to keep track of whether the
                    navigation is open or closed.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800">2. Conditional Rendering:</h4>
                  <p>The navigation slides in and out based on the state using CSS classes and transforms.</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800">3. Event Handling:</h4>
                  <p>When you click the menu button, it triggers a function that changes the state.</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800">4. Styling:</h4>
                  <p>We use Tailwind CSS classes for all styling - no separate CSS files needed!</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* OVERLAY */}
      {/* This creates a dark overlay when navigation is open on mobile */}
      {/* It only shows when isNavOpen is true */}
      {isNavOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleNavigation} // Clicking the overlay closes the navigation
        ></div>
      )}
      {/* 
      'fixed inset-0' makes it cover the entire screen
      'bg-black bg-opacity-50' makes it semi-transparent black
      'z-40' puts it above content but below navigation (which is z-50)
      'lg:hidden' hides it on large screens (desktop)
      */}
    </div>
  )
}
