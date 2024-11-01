import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'

function Header() {
    const [theme, setTheme] = useState(JSON.parse(localStorage.getItem('theme')) || true)

    useEffect(() => {
        localStorage.setItem('theme', JSON.stringify(theme))

        if (theme) {
            document.documentElement.classList.add('dark')
        }else {
            document.documentElement.classList.remove('dark')
        }
        
    }, [theme])

    return (
        <header className="card-shadow p-4 dark:bg-slate-900 dark:text-white">
            <div className="flex justify-between items-center max-sm:mx-4 mx-8">
                <Link to='/'><h1 className="max-sm:text-xl text-3xl font-bold">Where in the world?</h1></Link>
                {
                    theme ? (
                <button onClick={() => setTheme(!theme)} className="w-fit h-fit bg-slate-200 p-2 rounded"><i className="bi bi-brightness-high text-2xl dark:text-black"></i></button>
                    ) : (
                <button onClick={() => setTheme(!theme)} className="w-fit h-fit bg-slate-200 p-2 rounded"><i className="bi bi-moon text-2xl"></i></button>
                    )
                }
            </div>
        </header>
    )
}

export default Header