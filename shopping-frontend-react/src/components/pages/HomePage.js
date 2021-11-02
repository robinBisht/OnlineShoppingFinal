import ProductListing from "../layout/ProductListing";

function HomePage(){
    return (
        <div className="mt-4">
            <div className="text-center">
                <h1 className="display-1"> Prodcut Listing </h1>
            </div>
            <ProductListing/>
        </div>
    )
}

export default HomePage;