
function DisplayNutrition({ itemType, flavor, size }) {
    if (!itemType || !flavor || !size) return null;

    return(
        <div>
            <p>Here's the nutrition information for a {size} {flavor} {itemType}: </p>
        </div>
    );
}

export default DisplayNutrition