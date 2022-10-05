function isClass(type) {
    // React.Component subclasses have this flag
    return (
        Boolean(type.prototype) &&
        Boolean(type.prototype.isReactComponent)
    )
}

// This function only handles elements with a composite type.
// For example, it handles <App /> and <Button />, but not a <div />.
function mountComposite(element) {
    var type = element.type
    var props = element.props

    var renderedElement
    if (isClass(type)) {
        // Component class
        var publicInstance = new type(props)
        // Set the props
        publicInstance.props = props
        // Call the lifecycle if necessary
        if (publicInstance.componentWillMount) {
            publicInstance.componentWillMount()
        }
        renderedElement = publicInstance.render()
    } else if (typeof type === "function") {
        // Component function
        renderedElement = type(props)
    }

    // This is recursive but we'll eventually reach the bottom of recursion when
    // the element is host (e.g. <div />) rather than composite (e.g. <App />):
    return mount(renderedElement)
}

// This function only handles elements with a host type.
// For example, it handles <div /> and <p /> but not an <App />.
function mountHost(element) {
    var type = element.type
    var props = element.props
    var children = props.children || []
    if (!Array.isArray(children)) {
        children = [children]
    }
    children = children.filter(Boolean)

    // This block of code shouldn't be in the reconciler.
    // Different renderers might initialize nodes differently.
    // For example, React Native would create iOS or Android views.
    var node = document.createElement(type)
    Object.keys(props).forEach(propName => {
        if (propName !== "children") {
            node.setAttribute(propName, props[propName])
        }
    })

    // Mount the children
    children.forEach(childElement => {
        // Children may be host (e.g. <div />) or composite (e.g. <Button />).
        // We will also mount them recursively:
        var childNode = mount(childElement)

        // This line of code is also renderer-specific.
        // It would be different depending on the renderer:
        node.appendChild(childNode)
    })

    // Return the DOM node as mount result.
    // This is where the recursion ends.
    return node
}

function mount(element) {
    var type = element.type
    if (typeof type === "function") {
        // User-defined components
        return mountComposite(element)
    } else if (typeof type === "string") {
        // Platform-specific components
        return mountHost(element)
    }
}

export default mount