import { useState } from "react"
import Service from "../ServiceAndAbi/Service";

export default function GetStakicgBonusInfo({ wallet }) {
    const [stakingBonus, setStakingBonus] = useState(0);

    async function getMyRoutingBonus() {
        try {
            await Service.getInfoAboutMyBonus(wallet).then(answer => setStakingBonus(answer));
        // eslint-disable-next-line no-unused-vars
        } catch (error) {
            setStakingBonus(0);
        } 
    }
    return (
        <>
            <label><br />Кол-во бонусов на stacking контракте<br />
                <button onClick={getMyRoutingBonus}>Посмотреть</button>
                <p>Ваш баланс: {stakingBonus.toString()}</p>
            </label>
        </>
    )
};
