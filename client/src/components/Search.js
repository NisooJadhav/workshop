// import {
//     InstantSearch,
//     Hits,
//     SearchBox,
//     Highlight,
// } from 'react-instantsearch-dom';

// // Create the App component
// export default function Search() {
//     return (
//         <div className="ais-InstantSearch">
//             <InstantSearch indexName="demo_ecommerce" searchClient={searchClient}>
//                 <div className="right-panel">
//                     <SearchBox />
//                     <Hits hitComponent={Hit} />
//                 </div>
//             </InstantSearch>
//         </div>
//     );
// }

// function Hit(props) {
//     return (
//         <div>
//             <img src={props.hit.image} align="left" alt={props.hit.name} />
//             <div className="hit-name">
//                 <Highlight attribute="name" hit={props.hit} />
//             </div>
//             <div className="hit-description">
//                 <Highlight attribute="description" hit={props.hit} />
//             </div>
//             <div className="hit-price">${props.hit.price}</div>
//         </div>
//     );
// }