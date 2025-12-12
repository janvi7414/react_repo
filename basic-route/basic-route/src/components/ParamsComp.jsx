import React from 'react'
import { useParams } from 'react-router-dom'

const ParamsComp = () => {

    const {id} = useParams();

  return (
    <div>
      value of Params: {id}
    </div>
  )
}

export default ParamsComp

/*Params (short for URL Parameters) are values you take from the URL. 
Define a route with a param You put a : before the parameter name.
Get the param inside the component Use useParams():

for multiple params 
  <Route path="/user/:id/:section" />
  /user/50/profile
  useParams() → { id: "50", section: "profile" }

  --><--
  Query Params

These are key–value pairs you see after a question mark (?) in the URL.

Example:
/products?category=shoes&color=black
Here:

* `category = shoes`
* `color = black`

These are query params also called search params.

When do we use Query Params?
We use them when we want to send optional data through the URL.
Examples:

* Filters
  `/products?brand=nike`
* Search
  `/movies?search=avatar`
* Sorting
  `/blog?sort=latest`
* Pagination
  `/users?page=3`

  How to use Query/Search Params in React Router
    React Router gives a hook:
      useSearchParams()
    Getting Query Params**
Example URL:
      /products?category=clothes&sort=new


import { useSearchParams } from "react-router-dom";

function Products() {
  const [searchParams] = useSearchParams();

  const category = searchParams.get("category");
  const sort = searchParams.get("sort");

  return (
    <>
      <h1>Category: {category}</h1>
      <h1>Sort: {sort}</h1>
    </>
  );
}
```

Output:
Category: clothes
Sort: new

Setting or Updating Query Params

const [searchParams, setSearchParams] = useSearchParams();
setSearchParams({ category: "shoes", sort: "popular" });

/products?category=shoes&sort=popular
*/
