import React from "react";
import { AuthProvider } from "../contexts/AuthContext"

function Layout({ jwt, children }) {

  return <AuthProvider jwt={jwt}>{children}</AuthProvider>
}

export default Layout