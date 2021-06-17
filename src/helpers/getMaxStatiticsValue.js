export const getMaxStatiticsValue = (
    accIntelligence,
    accStrength,
    accSpeed,
    accDurability,
    accPower,
    accCombat,
) => {
    const maxValue = Math.max(
        accIntelligence,
        accStrength,
        accSpeed,
        accDurability,
        accPower,
        accCombat
    );
    let backgroundClass;
    let highestVariable;
    switch (maxValue) {
        case accIntelligence:
            highestVariable = "Intelligence";
            backgroundClass = "bg-primary";
            break;
        case accStrength:
            highestVariable = "Strength";
            backgroundClass = "bg-info";
            break;
        case accSpeed:
            highestVariable = "Speed";
            backgroundClass = "bg-warning";
            break;
        case accDurability:
            highestVariable = "Durability";
            backgroundClass = "bg-dark";
            break;
        case accPower:
            highestVariable = "Power";
            backgroundClass = "bg-danger";
            break;
        case accCombat:
            highestVariable = "Combat";
            backgroundClass = "bg-success";
            break;
        default:
            highestVariable = "No one";
            backgroundClass ="";
            break;
    }
    return {
        maxValue,
        highestVariable,
        backgroundClass
    };
};
