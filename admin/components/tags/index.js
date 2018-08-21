import React, { Component } from "react";
import PropTypes from "prop-types";
import Select from "react-select";

export class StyledTags extends Component {
    static propTypes = {
        labelKey: PropTypes.string,
        multi: PropTypes.bool,
        onChange: PropTypes.func,
        options: PropTypes.array,
        value: PropTypes.array,
        valueKey: PropTypes.string
    };

    render() {
        const {
            labelKey,
            multi,
            onChange,
            options,
            value,
            valueKey
        } = this.props;
        return (
            <div>
                <div className="meta-label">Tags</div>
                <div className="x_content">
                    <div className="control-group">
                        <Select.Creatable
                            labelKey={labelKey}
                            valueKey={valueKey}
                            value={value}
                            onChange={onChange}
                            options={options}
                            multi={multi}
                        />
                    </div>
                </div>
                <hr />
            </div>
        );
    }
}
export default StyledTags;
