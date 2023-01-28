import { useState } from "react";
import "./App.css";
import Button from "./components/button";
import Products from "./components/products";
import Search from "./components/search";
import { product, productCat } from "./components/data";

function App() {
    const [data, setData] = useState(product);
    const [checked, setChecked] = useState(false);

    // useEffect(() => {
    //   if (checked) {
    //     let newArr1 = [];
    //     product.map(e => {
    //       if (e.isStock) {
    //         setData(newArr1)
    //       }
    //     })
    //   } else {
    //     setData(product)
    //   }
    // }, [])
    function OnlyProductsInStock(para) {
        setChecked(!checked);
        if (para) {
            let newArr1 = [];
            product.map((e) => {
                if (e.isStock) {
                    newArr1.push(e);
                    setData(newArr1);
                }
            });
        } else {
            setData(product);
        }
    }

    function search(para) {
        let newArr = [];
        product.map((e) => {
            if (e.name.includes(para)) {
                newArr.push(e);
            }
            setData(newArr);
        });
    }

    return (
        <div id="container">
            <Search search={search} />
            <Button
                setChecked={setChecked}
                checked={checked}
                OnlyProductsInStock={OnlyProductsInStock}
            />
            <Products setData={setData} data={data} productCat={productCat} />
        </div>
    );
}

export default App;
