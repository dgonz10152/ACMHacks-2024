import "./about.css"
export default function NestedLayout({ children }){
    return(
            <html lang="en">
                <body>{children}</body>
            </html>
    );
}