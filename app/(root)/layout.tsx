import Navbar from "@/components/LayoutComponents/Navbar"


const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="">
            <main className="">
                <Navbar />
                {children}
            </main>
        </div>
    )
}

export default layout