import Navbar from "@/components/LayoutComponents/Navbar"
import Footer from '@/components/LayoutComponents/Footer'


const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="">
            <main className="">
                <Navbar />
                {children}
                <Footer />
            </main>
        </div>
    )
}

export default layout