
function WaterIceForm({ flavor, setFlavor }) {

    return(
        <div>
            <label htmlFor='flavor'>Choose a flavor: </label>
            <select 
                id='flavor'
                value={flavor}
                onChange={(e) => setFlavor(e.target.value)}
            >
                <option value="">--Select a flavor--</option>
                <option value="apple-berry-blue">Apple Berry Blue</option>
                <option value="banana">Banana</option>
                <option value="blue-raspberry">Blue Raspberry</option>
                <option value="blueberry">Blueberry</option>
                <option value="blueberry-lemonade">Blueberry Lemonade</option>
                <option value="carnival">Carnival</option>
                <option value="cherry">Cherry</option>
                <option value="cherry-lemonade">Cherry Lemonade</option>
                <option value="cherry-limeade">Cherry Limeade</option>
                <option value="cantaloupe">Cantaloupe</option>
                <option value="chocolate">Chocolate</option>
                <option value="chocolate-chocolate-chip">Chocolate Chocolate Chip</option>
                <option value="chocolate-peanut-butter">Chocolate Peanut Butter</option>
                <option value="cotton-candy">Cotton Candy</option>
                <option value="dr-pepper">Dr Pepper</option>
                <option value="florida-orange">Florida Orange</option>
                <option value="georgia-peach">Georgia Peach</option>
                <option value="green-apple">Green Apple</option>
                <option value="guava-passionfruit">Guava Passionfruit</option>
                <option value="gummy-bear">Gummy Bear</option>
                <option value="island-fusion">Island Fusion</option>
                <option value="juicy-pear">Juicy Pear</option>
                <option value="kandi-kapow">Kandi Kapow!</option>
                <option value="key-lime">Key Lime</option>
                <option value="lemon">Lemon</option>
                <option value="mango">Mango</option>
                <option value="mango-orange">Mango- Orange</option>
                <option value="mango-peach">Mango-Peach</option>
                <option value="mango-pineapple">Mango- Pineapple</option>
                <option value="mango-strawberry">Mango- Strawberry</option>
                <option value="margarita">Margarita</option>
                <option value="ocean-splash">Ocean Splash™</option>
                <option value="peach-ring">Peach Ring</option>
                <option value="peanut-butter-and-jelly">Peanut Butter and Jelly</option>
                <option value="pina-colada">Pina Colada</option>
                <option value="pineapple">Pineapple</option>
                <option value="raspberry">Raspberry</option>
                <option value="raspberry-lemonade">Raspberry Lemonade</option>
                <option value="root-beer">Root Beer</option>
                <option value="sour-patch-kids-red">Sour Patch Kids Red</option>
                <option value="strawberry">Strawberry</option>
                <option value="strawberry-colada">Strawberry Colada</option>
                <option value="strawberry-lemonade">Strawberry Lemonade</option>
                <option value="strawberry-margarita">Strawberry Margarita</option>
                <option value="strawberry-watermelon">Strawberry- Watermelon</option>
                <option value="swedish-fish">Swedish Fish</option>
                <option value="tropical-daiquiri">Tropical Daiquiri</option>
                <option value="tropical-paradice">Tropical ParadICE</option>
                <option value="vanilla">Vanilla</option>
                <option value="watermelon">Watermelon</option>
                <option value="wild-berry">Wild Berry</option>
                <option value="wild-black-cherry">Wild Black Cherry</option>
                <option value="zombie-s-blood">Zombie's Blood</option>
                <option value="unicorn">Unicorn</option>
                <option value="birthday-cake">Birthday Cake</option>
                <option value="banana-split-cream">Banana Split Cream</option>
                <option value="black-cherry-cheesecake">Black Cherry Cheesecake</option>
                <option value="brookie-dough">Brookie Dough</option>
                <option value="cheesecake">Cheesecake</option>
                <option value="chocolate-chip-cheesecake">Chocolate Chip Cheesecake</option>
                <option value="chocolate-covered-banana">Chocolate Covered Banana</option>
                <option value="chocolate-covered-strawberry">Chocolate Covered Strawberry</option>
                <option value="coconut-cream">Coconut Cream</option>
                <option value="cookie-dough">Cookie Dough</option>
                <option value="cookies-cream">Cookies & Cream</option>
                <option value="frozen-hot-cocoa">Frozen Hot Cocoa</option>
                <option value="fudge-brownie">Fudge Brownie</option>
                <option value="marshmallow-peanut-butter">Marshmallow Peanut Butter</option>
                <option value="mint-chocolate-chip">Mint Chocolate Chip</option>
                <option value="mint-oreo">Mint Oreo</option>
                <option value="orange-cream">Orange Cream</option>
                <option value="pumpkin-cheesecake">Pumpkin Cheesecake</option>
                <option value="pumpkin-pie">Pumpkin Pie</option>
                <option value="root-beer-float">Root Beer Float</option>
                <option value="s-mores">S'mores</option>
                <option value="shamrock">Shamrock</option>
                <option value="strawberry-banana">Strawberry Banana</option>
                <option value="strawberry-cheesecake">Strawberry Cheesecake</option>
                <option value="strawberries-n-cream">Strawberries n' Cream</option>
                <option value="vanilla-cream">Vanilla Cream</option>
                <option value="watermelon-chip">Watermelon Chip</option>
                <option value="maliblu-freeze">MaliBLU Freeze</option>
                <option value="razzle-red">Razzle Red</option>
                <option value="very-bery">Very Bery</option>
                <option value="s-f-cherry">S/F Cherry</option>
                <option value="s-f-dragon-fruit">S/F Dragon Fruit</option>
                <option value="s-f-mango-peach">S/F Mango Peach</option>
                <option value="s-f-pink-lemonade">S/F Pink Lemonade</option>
                <option value="s-f-tangerine">S/F Tangerine</option>
                </select>
        </div>
    );
}

export default WaterIceForm