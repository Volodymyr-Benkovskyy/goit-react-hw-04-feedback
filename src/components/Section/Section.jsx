import PropTypes from 'prop-types';
import s from './Section.module.css';

export const Section = ({ title, children }) => {
    return (
        <>
        <h1 className= {s.sectionTitle}>{title}</h1>
        {children}
        </>
    )
}
Section.propType = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}