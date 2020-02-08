import React, { Component } from 'react';
import Section from '../components/Section';
import recipeService from '../services/recipes.service';
import helper from '../services/helper.service';
import RecipeDisplay from '../components/RecipeDisplay';

class Recipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipeCode: '',
            recipe: {},
            loading: true,
            hasError: false
        };
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        const recipe = helper.getSavedRecipe({id});
        if(recipe.recipecode) {
            this.setState({
                recipe,
                loading: false
            });
        } else {
            this.getFromOnline({id});
        }
    }

    getFromOnline({id}) {
        recipeService.getRecipe({id}).then(data => {
            this.setState({
                recipe: data,
                loading: false
            }, () =>{
                helper.saveRecipe({id, data});
            });
        }).catch(err => {
            this.setState({
                hasError: true
            });
        });
    }

    displayRecipe({recipe}) {
        if (recipe.recipecode) {
            return <RecipeDisplay data={recipe} />;
        } else {
            return this.errorMessage();
        }
    }

    loading() {
        if (!this.state.hasError) {
            return (
                <div className="has-text-centered">
                    <progress class="progress is-small is-primary" max="100">25%</progress>
                </div>
            )
        } else {
            return (
                <div className="has-text-centered">
                    <h1>OOpsy Daisy!</h1>
                </div>
            )
        }
    }

    errorMessage() {
        return (
            <div className="has-text-centered has-text-danger">
                <h1>OOpsy! There was an error getting this recipe. Are you offline?</h1>
            </div>
        )
    }

    render() {
        const { loading, recipe, hasError } = this.state;
        return (
            <Section>
                {loading && this.loading()}
                {!loading && !hasError && this.displayRecipe({recipe})}
                {hasError && this.errorMessage()}
            </Section >
        );
    }
}

export default Recipe;