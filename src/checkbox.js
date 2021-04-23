import React from "react";
import "./styles.css";

class CheckBox extends React.Component {
  componentDidMount() {
    this.selector.indeterminate = this.props.indeterminate;
  }

  componentDidUpdate(prevProps) {
    if (prevProps.indeterminate !== this.props.indeterminate) {
      this.selector.indeterminate = this.props.indeterminate;
    }
  }

  render() {
    const {
      id,
      label,
      type,
      indeterminate,
      hasError,
      ...inputProps
    } = this.props;

    return (
      <div className="chkbox">
        <input
          type="checkbox"
          ref={(el) => (this.selector = el)}
          id={id}
          {...inputProps}
        />
        <label htmlFor={id}>{label}</label>
      </div>
    );
  }
}

export default CheckBox;
