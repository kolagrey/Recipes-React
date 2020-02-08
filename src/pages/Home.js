import React, { Component } from 'react';
import { connect } from "react-redux";
import recipeActions from "../actions";
import Featured from '../components/Featured';
import Section from '../components/Section';
import helper from '../services/helper.service';
import More from '../components/More';

const { getRecipes } = recipeActions;

class Home extends Component {
    constructor(props) {
        super(props);
        this.getRecipes = this.getRecipes.bind(this);
    }

    componentDidMount() {
        this.getRecipes();
    }

    getRecipes() {
        this.props.getRecipes({ start: this.props.recipes.length });
    }

    errorMessage() {
        return (
            <div className="has-text-centered has-text-danger">There was an error getting recipes.</div>
        )
    }

    buttonState(loading) {
        return loading ? ("button is-loading is-primary") : ("button is-primary");
    }

    render() {
        return (
            <Section>
                <Featured data={this.props.recipes} />
                <More loading={this.props.loading} getMoreRecipe={this.getRecipes} buttonState={this.buttonState} />
                {!this.props.recipes.length && !this.props.loading && this.errorMessage()}
            </Section >

        );
    }
}

const mapStateToProps = state => {
    helper.saveRecipes({data: state.recipes.data});
    return {
        recipes: state.recipes.data,
        loading: state.recipes.loading
    }
}

const mapDispatchToProps = dispatch => {
  return { getRecipes: ({start}) => dispatch(getRecipes({start})) } //note the dispatch call
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);