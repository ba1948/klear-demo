import clasess from './Layout.module.css';

function Layout(props) {
    return (
        <div>
            <main className={clasess.main}>
                {props.children}
            </main>
        </div>
    );
}

export default Layout;