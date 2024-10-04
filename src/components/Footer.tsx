export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-100 py-4 mt-auto ">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-600 text-sm">
          &copy; {currentYear} Pieter Deane. All rights reserved.
        </p>
      </div>
    </footer>
  )
}