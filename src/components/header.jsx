function Sidebar(){
    return (
        <header id="header">
            <h1>Movie app</h1>
            <section className="search-bar">
                <input name="search" placeholder="Search movies or series" type="search"/>
            </section>
        </header>
    );
}

export default Sidebar;