import React, {Component} from "react";
import slugify from 'slugify';
import FeatureItem from './FeatureItem';

class FeatureList extends Component {

    render() {
        //console.log(this.props.features);
        const features = Object
            .keys(this.props.features)
            .map((feature, idx) => {
                const featureHash = feature + '-' + idx;
                const options = this
                    .props
                    .features[feature]
                    .map(item => {
                        const itemHash = slugify(JSON.stringify(item));

                        return (<FeatureItem
                            key={itemHash}
                            itemeHash={itemHash}
                            feature={feature}
                            item={item}
                            {...this.props}/>);

                    });
                return (
                    <fieldset className="feature" key={featureHash}>
                        <legend className="feature__name">
                            <h3>{feature}</h3>
                        </legend>
                        {options}
                    </fieldset>
                );
            });
        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                {features}
            </form>

        );

    }

}
export default FeatureList;