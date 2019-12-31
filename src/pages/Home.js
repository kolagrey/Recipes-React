import React, { Component } from 'react';
import Featured from '../components/Featured';
import Section from '../components/Section';
import recipeService from '../services/recipes.service';
import helper from '../services/helper.service';
import More from '../components/More';

class Home extends Component {
    constructor(props) {
        super(props);

        this.getMoreRecipe = this.getMoreRecipe.bind(this);
        this.init = this.init.bind(this);

        this.state = {
            loading: true,
            start: 0,
            showModal: false,
            recipes: [],
            hasError: false
        };
    }

    componentDidMount() {
        const savedRecipes = helper.getSavedRecipes();
        if(savedRecipes.length) {
            this.setState({
                recipes: savedRecipes,
                loading: false
            });
        } else {
            this.init(0);
        }
    }

    init(start) {
        const { recipes } = this.state;
        console.log({start});
        recipeService.getAllRecipes(start).then(data => {
            this.setState({
                recipes: [...recipes, ...data],
                loading: false,
                start: start + 21
            }, () => {
                helper.saveRecipes(this.state.recipes);
            });
        }).catch(err => {
            this.setState({
                hasError: true,
                loading: false
            });
        });
    }

    errorMessage() {
        return(
            <div className="has-text-centered has-text-danger">There was an error getting recipes.</div>
        )
    }

    getMoreRecipe() {
        const { start, recipes } = this.state;
        this.setState({
            loading: true,
            showModal: true
        });
        recipeService.getAllRecipes(start).then(data => {
            this.setState({
                recipes: [...recipes, ...data],
                loading: false,
                start: start + 21
            }, () => {
                helper.saveRecipes(this.state.recipes);
            });
        }).catch(err => {
            this.setState({
                hasError: true,
                loading: false
            });
        });
    }

    buttonState(loading) {
        return loading ? ("button is-loading is-primary") : ("button is-primary");
    }

    render() {
        const { recipes, loading, hasError } = this.state;
        return (
            <Section>
                <Featured data={recipes} />
                <More loading={loading} getMoreRecipe={this.getMoreRecipe} buttonState={this.buttonState} />
                {hasError && this.errorMessage()}
            </Section >

        );
    }
}

export default Home;