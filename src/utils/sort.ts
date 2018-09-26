// https://www.sitepoint.com/sort-an-array-of-objects-in-javascript/
export default function(key: string, order: boolean = false) {
    return (a: string, b: string) => {
        if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
            // property doesn't exist on either object
            return 0;
        }

        const varA = (typeof a[key] === 'string') ?
            a[key].toUpperCase() : a[key];
        const varB = (typeof b[key] === 'string') ?
            b[key].toUpperCase() : b[key];

        let comparison = 0;
        if (varA > varB) {
            comparison = 1;
        } else if (varA < varB) {
            comparison = -1;
        }
        return (
            order ? (comparison * -1) : comparison
        );
    };
}
