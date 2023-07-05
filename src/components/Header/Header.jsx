/* Props is always an object 
that contains whatever properties we pass it where the component is rendered

{
    title: 'dynamic value depending on what was passed in'
}
*/

// This is the exact same functionality as:
// function Header (props) { ... props.title }
function Header ({ title }) {
    return (
        <h2>{title}</h2>
    );
};

export default Header;