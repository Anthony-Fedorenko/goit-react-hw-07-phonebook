import React from "react";
import PropTypes from 'prop-types'
import Section from "../Section/Section";

const Layout = ({children}) => (
    <>
    <Section>{children}</Section>
    </>
)
Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout