
import { Footer } from "../NavbarAndFooter/Footer";
import { Navbar } from "../NavbarAndFooter/Navbar";
import { SearchBooksPage } from "../SearchBooksPage/SearchBooksPage";
import { Carousel } from "./components/Carousel";
import { ExploreTopBooks } from "./components/ExploreTopBooks";
import { Heros } from "./components/Heros";
import { LibraryServices } from "./components/LibraryServices";

export const HomePage = () => {
    return (
        // <> is added so that we have only 1 parent
        <> 
            <ExploreTopBooks/>
            <Carousel></Carousel>
            <Heros/>
            <LibraryServices/>
        </>
    );
}