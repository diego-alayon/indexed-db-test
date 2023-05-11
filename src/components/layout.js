import Navigation from './navigation'
import Header from './header'

const Layout = ({children}) => {
    return (
        <>
            <Header />
            <div className='bg-slate-100 grid grid-cols-12 max-h-screen'>
                <div className='col-span-2'><Navigation /></div>
                <div className='col-span-10'>{children}</div>
            </div>

        </>
    )
}
export default Layout