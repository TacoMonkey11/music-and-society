<script>
    import {
        Timeline,
        TimelineItem,
        TimelineSeparator,
        TimelineDot,
        TimelineConnector,
        TimelineContent,
        TimelineOppositeContent
    } from 'svelte-vertical-timeline';

    const data = [
        { time: `1960s -> 1970s`, content: `Lo-Fi in the 1960s is completely different from what we know today. Most music described as Lo-Fi during this time just meets the current dictionary definition of Low Fidelity, that being just a low quality recording and instrumentation. One of those bands meeting the criteria were that Beach Boys. The Beach Boys would constantly inovate with new sounds that are very DIY.` },
        { time: `1980s`, content: `Around this time, Lo-Fi itself was morphing and changing based on popular instruments. To capture this new` },
        { time: `1990s`, content: `Lo-Fi in the 1990s` },
        { time: `2000s`, content: `Lo-Fi in the 2000s` },
        { time: `2010s`, content: `Lo-Fi in the 2010s` },
        { time: `2020s`, content: `Lo-Fi in the 2020s` },
    ]
</script>

<h1 class="title">Lo-Fi!</h1>

<p class="intro-text">The Lo-Fi genre of music has exploaded over the course of the pandemic. Thousands of people tune in to youtube live streams just to listen to Lo-Fi. But many don't know of Lo-Fi's humble beginnings and changing definitions</p>
<div class="livestream">
    <iframe width="784" height="441" src="https://www.youtube-nocookie.com/embed/jfKfPfyJRdk?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
<p class="intro-text" style="margin-bottom: 10%">You may have come across this livestream before, arguably the most popular example of Lo-Fi available. This livestream in particular plays Lo-Fi Hip Hop, one of the more popular sub-genres of Lo-Fi, and what this display focuses more on.</p>
<div id="timeline">
    <h1 class="title">Simple History</h1>
    <Timeline position="alternate">
        {#each data as item}
            <TimelineItem>
                <TimelineOppositeContent slot="opposite-content">
                    <h3>{item.time}</h3>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <h3>{item.content}</h3>
                </TimelineContent>
            </TimelineItem>
        {/each}
    </Timeline>
</div>
<footer>
	Made By Spencer Al-Jbouri
</footer>
