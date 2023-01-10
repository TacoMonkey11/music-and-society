<script>
    import Bubble from "./Bubble.svelte";
    
    import {
        Timeline,
        TimelineItem,
        TimelineSeparator,
        TimelineDot,
        TimelineConnector,
        TimelineContent, TimelineOppositeContent
    } from 'svelte-vertical-timeline';

    const data = [
        { time: `1960s`, content: `Lo-Fi in the 1960s is completely different from what we know today. Most music described as Lo-Fi during this time just meets the current dictionary definition of Low Fidelity, that being just a low quality recording. One of those bands meeting the criteria were the Beach Boys` },
        { time: `1970s`, content: `Lo-Fi in the 1970s` },
        { time: `1980s`, content: `Lo-Fi in the 1980s` },
        { time: `1990s`, content: `Lo-Fi in the 1990s` },
        { time: `2000s`, content: `Lo-Fi in the 2000s` },
        { time: `2010s`, content: `Lo-Fi in the 2010s` },
        { time: `2020s`, content: `Lo-Fi in the 2020s` },
    ]
</script>

<h1>Lo-Fi!</h1>

<p style="margin-bottom: 10%;">The Lo-Fi genre of music has exploaded over the course of the pandemic. Thousands of people tune in to youtube to listen to Lo-Fi. But many don't know of Lo-Fi's humble beginnings and changing definitions</p>

<Timeline id="timeline">
    {#each data as item}
        <TimelineItem>
            <TimelineOppositeContent slot="opposite-content">
                <h2>{item.time}</h2>
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
