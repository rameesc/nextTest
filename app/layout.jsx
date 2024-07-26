
import '.././styles/globals.css'
import Nav from '../componens/Nav'
import Provider from '../componens/Providar'
export const metadata={
    title:'my-app',
    description:'Discover & Share AI Prompts'
}

const RootLayout = ({children}) => {
  return (
    <html lang="en">
        <body>
         <Provider>
            <div className='main'>
                <div className='gradient'/>

            </div>
            <main className='app'>
                <Nav/>
                {children}
            </main>
         </Provider>
        </body>
    </html>
  )
}

export default RootLayout