// Paragraphs - dummy layout content
// yarn add lodash
// <Paras />

import React from 'react'
import { flatten, times } from 'lodash'

export default class Paras extends React.Component{
    render() {

        const NUMBER_OF_PARAGRAPHS = 15
        const paragraphs = flatten(times(NUMBER_OF_PARAGRAPHS, (i) => {
            return (
                <p key={i}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque nemo, inventore vitae, sint quibusdam nobis et enim aliquam veniam nam aut dolore hic beatae fugit ducimus possimus quos, nihil quisquam.
                </p>
             )
        }))

        return(
            <div style={{columns: 2, columnGap: '3rem'}}>
            { paragraphs.map(paragraph => paragraph) }
            </div>
        )
    }
}

