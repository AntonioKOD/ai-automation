'use client'
import { NavBar } from "./ui/tubelight-navbar"
import {Home, User, Briefcase, FileText} from "lucide-react"


export default function Navbar() {
    const navItems = [
        {name: "Contact", icon: Briefcase, url: "#contact"},
        {name: "Pricing", icon: FileText, url: "#pricing"},
        {name: "About", icon: User, url: "#about"},
    ]
    return (
    <div>
        <NavBar items={navItems} />
    </div>
    )
}