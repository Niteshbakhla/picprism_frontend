import React from 'react'
import { Link } from 'react-router-dom'

const HomeFooter = () => {
  return (
              <footer className="  py-4 shadow-sm sticky bottom-0 z-2">
                          <div className=" mx-auto flex items-center justify-between px-4 md:px-6">
                                      <p className="text-sm text-gray-500">&copy; 2024 StockSnap. All rights reserved.</p>
                                      <nav className="flex items-center gap-4">
                                                  <Link href="#" className="text-sm text-gray-500 hover:underline" prefetch={false}>
                                                              Privacy Policy
                                                  </Link>
                                                  <Link href="#" className="text-sm text-gray-500 hover:underline" prefetch={false}>
                                                              Terms of Service
                                                  </Link>
                                                  <Link href="#" className="text-sm text-gray-500 hover:underline" prefetch={false}>
                                                              Contact Us
                                                  </Link>
                                      </nav>
                          </div>
              </footer>
  )
}

export default HomeFooter