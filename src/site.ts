const buttonAdd : HTMLButtonElement | null = document.querySelector<HTMLButtonElement>("#buttonAdd");
const buttonSub : HTMLButtonElement | null = document.querySelector<HTMLButtonElement>("#buttonSub");
const buttonReset : HTMLButtonElement | null = document.querySelector<HTMLButtonElement>("#buttonReset");
const valueText : HTMLInputElement | null = document.querySelector<HTMLInputElement>("#valueText");

try {
    if(!buttonAdd) throw Error("no buttonAdd");
    if(!buttonSub) throw Error("no buttonSub");
    if(!buttonReset) throw Error("no buttonReset");
    if(!valueText) throw Error("no valueText");
    
    const initialValue : number = Math.floor((Math.random() * 10) + 1);
    console.log(`Initial Value : ${initialValue}`);
    
    let value : number = initialValue;
    console.log(`Value : ${value}`);

    buttonAdd.addEventListener('click', () => {
        console.log('Increment value');
        changeValue(++value);
    });

    buttonReset.addEventListener('click', () => {
        console.log('Reset value to initialValue');
        value = initialValue;
        changeValue(value);
    });

    buttonSub.addEventListener('click', () => {
        console.log('Decrement value');        
        changeValue(--value);
    });
    
    const changeValue = (value : number) =>
    {
        buttonReset.disabled = (value === initialValue);
        buttonSub.disabled = (value === 0);
        valueText.value = value.toString();
    }

    changeValue(value);    
} catch (error : unknown) {
    console.error(error)
}
