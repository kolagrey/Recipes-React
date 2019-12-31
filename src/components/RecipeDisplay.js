import React from 'react';
import Card from './Card';
import ContentCard from './ContentCard';
import StepCard from './StepCard';
import Spacer from './Spacer';

const RecipeDisplay = (props) => {
    const { recipecode, title, coverphoto, views, recipedirections, ingredients, description } = props.data;
    const cardData = {
        recipecode, title, coverphoto, views
    };
    return (
        <div className="columns is-multiline">
            <div className="column is-one-third">
                <Spacer>
                    <Card data={cardData} noLink="true" />
                </Spacer>
                <Spacer>
                    <ContentCard title="Description" data={description} />
                </Spacer>
                <Spacer>
                    <ContentCard title="Ingredients" data={ingredients} />
                </Spacer>
            </div>
            <div className="column">
                <div className="columns is-multiline">
                    {recipedirections.map((direction) => {
                        return (
                            <div key={direction.step} className="column is-full-mobile is-half">
                                <Spacer>
                                    <StepCard data={direction} />
                                </Spacer>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default RecipeDisplay;