// Mixed Messages Project

//Create your character

const characterGenerator = () => {
    const adjArr = ["mighty", "wise", "cunning", "powerful", "malicious", "clumsy", "brave", "devious"];
    const classArr = ["mage", "wizard", "warrior", "knight", "thief", "assassin", "paladin"];
    let adjIndex = Math.floor(Math.random() * adjArr.length);
    let classIndex = Math.floor(Math.random() * classArr.length);
    let adj = adjArr[adjIndex];
    let charClass = classArr[classIndex];
    return `The hero of our story is a ${adj} ${charClass}.`;

}

//Generate a Quest

const questGenerator = () => {
    const actionArr = ["save", "defeat", "heal", "battle", "protect"];
    const targetArr = ["villagers", "chickens", "dragon", "apples"];
    const problemArr = ["curse", "plague", "invasion", "end of the world"];
    let actionIndex = Math.floor(Math.random() * actionArr.length);
    let targetIndex = Math.floor(Math.random() * targetArr.length);
    let problemIndex = Math.floor(Math.random() * problemArr.length);
    let action = actionArr[actionIndex];
    let target = targetArr[targetIndex];
    let problem = problemArr[problemIndex];
    let successIndex = Math.floor(Math.random() * 10);
    if (successIndex == 0) {
        return `\nOur hero must go on a quest to ${action} the ${target} and stop the ${problem}.\nOur hero succeeded in his quest. He managed to ${action} the ${target}. The ${problem} is finally over...`;
    } else {
        return `\nOur hero must go on a quest to ${action} the ${target} and stop the ${problem}.\nOur hero failed in his quest to ${action} the ${target}. The ${problem} continues...`;
    }
}

const generateMessage = () => {
    console.log(`${characterGenerator()}${questGenerator()}`);
}

generateMessage();