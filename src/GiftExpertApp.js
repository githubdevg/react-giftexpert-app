import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import GiftGrid from "./components/GifGrid";

export const GiftExpertApp = () => {
  //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

  const [categories, setCategories] = useState(["Samurai X"]);

  // const handleAdd = () => {
  //     // setCategories((categories) => {
  //     //     // const clone = Array.from(categories);
  //     //     // clone.push('HunterXHunter');
  //     //     // const clonedArray = categories.slice();
  //     //     // clonedArray.push('HunterXHunter');
  //     //     return clonedArray;
  //     // });
  //     setCategories([...categories, 'HunterXHunter']);
  // };

  return (
		<>
			<h2>GiftExpertApp</h2>
			<hr />

			{/* <button onClick={ handleAdd } >Agregar</button> */}

			<AddCategory setCategories={setCategories} />
			<ol>
				{categories.map((category) => (
					<GiftGrid key={category} category={category} />
				))}
			</ol>
		</>
  );
};
