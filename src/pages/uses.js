import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Social from "../components/social"
import PageHeader from "../components/page-header"
import ParagraphStyles from "../styles/ParagraphStyles"
import SmallListStyles from "../styles/SmallListStyles"

const ListHeading = styled.h2`
  max-width: 80rem;
  width: 100%;
  justify-self: center;
  margin-top: 3rem;
  display: grid;
  padding: 1rem;
  font-size: 2.5rem;
  :after {
    content: "";
    height: 0.3rem;
    background: ${props => props.theme.orange};
    width: 100%;
    grid-column: 1 / -1;
  }
`

const UsesPage = () => (
  <Layout>
    <SEO title="Uses" />
    <PageHeader>Uses</PageHeader>
    <ParagraphStyles>
      Welcome to my "uses" page! Below you will find a list of most of the tools
      and hardware that I use day-to-day. If you have a quesion about something
      that is not listed here, feel free to reach out to me on the{" "}
      <Link to="/contact">contact page</Link>.
    </ParagraphStyles>
    <ListHeading>Terminal & Editor</ListHeading>
    <SmallListStyles>
      <li>
        Currently I use <a href="https://code.visualstudio.com/">VS Code</a> as
        my editor and <a href="https://cmder.net/">cmder</a> as my terminal.
      </li>
      <li>
        I use the{" "}
        <a href="https://vscodethemes.com/e/sdras.night-owl">Night Owl theme</a>
        , created by <a href="https://sarahdrasnerdesign.com/">Sarah Drasner</a>
        .
      </li>
      <li>
        My font is <a href="https://github.com/tonsky/FiraCode">Fira Code</a>,
        which comes with a lot of nice ligatures.
      </li>
      <li>
        I use the{" "}
        <a href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint">
          ES Lint
        </a>{" "}
        and{" "}
        <a href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode">
          Prettier
        </a>{" "}
        extensions to make sure I am writing clean code.
      </li>
      <li>
        The{" "}
        <a href="https://marketplace.visualstudio.com/items?itemName=xabikos.ReactSnippets">
          Reactjs code snippets
        </a>{" "}
        extension helps me write code much faster.
      </li>
    </SmallListStyles>
    <ListHeading>Productivity Applications</ListHeading>
    <SmallListStyles>
      <li>
        I use <a href="https://todoist.com/">Todoist</a> for my daily to-do
        list.
      </li>
      <li>
        <a href="https://notion.so">Notion</a> is where I create tasks for my
        projects. It has an excellent Kanban board.
      </li>
      <li>
        <a href="https://www.google.com/calendar">Google Calendar</a> is my go
        to for managing my time.
      </li>
      <li>
        I use <a href="https://evernote.com">Evernote</a> to quickly write down
        ideas that I have before I make them into tasks.
      </li>
    </SmallListStyles>
    <ListHeading>Other Apps</ListHeading>
    <SmallListStyles>
      <li>
        For my screen recording, I currently use{" "}
        <a href="https://obsproject.com">OBS Studio</a>.
      </li>
      <li>
        To edit my videos I use{" "}
        <a href="https://www.adobe.com/products/premiere.html">
          Adobe Premiere Pro
        </a>{" "}
        through my{" "}
        <a href="https://www.adobe.com/creativecloud.html">Creative Cloud</a>{" "}
        subscription.
      </li>
      <li>
        I make all my designs and mockups using{" "}
        <a href="https://www.adobe.com/products/xd.html">Adobe XD</a>.
      </li>
      <li>
        I use <a href="https://www.dropbox.com">Dropbox</a> to share my files
        across all my devices.
      </li>
    </SmallListStyles>
    <ListHeading>Gear</ListHeading>
    <SmallListStyles>
      <li>
        For my audio recording, I use the{" "}
        <a href="https://www.amazon.com/Neewer-Professional-Broadcasting-Microphone-Adjustable/dp/B00XOXRTX6">
          Neewer NW-700 Microphone
        </a>{" "}
        with the{" "}
        <a href="https://www.amazon.com/Neewer-1-Channel-Microphone-Condenser-Recording/dp/B014H8AWGC/ref=pd_lpo_sbs_267_t_0?_encoding=UTF8&psc=1&refRID=K6ANEWZGFEBFVV12TRMY">
          48V Power Supply
        </a>
        .
      </li>
      <li>
        I have two{" "}
        <a href="https://www.amazon.com/ViewSonic-VA2259-SMH-Frameless-Monitor-Inputs/dp/B01HSABNU0/ref=sr_1_1?keywords=viewsonic+va2259&qid=1566417019&s=musical-instruments&sr=8-1">
          ViewSonic VA2259-SMH
        </a>{" "}
        22 inch monitors.
      </li>
      <li>
        I use the{" "}
        <a href="https://www.amazon.com/Monitor-Standing-Adjustable-Screens-HUANUO/dp/B074K35TJZ/ref=sr_1_2_sspa?crid=1OA5Z9SRUDOX4&keywords=wali+dual+monitor+stand&qid=1566417070&s=gateway&sprefix=wali%2Caps%2C192&sr=8-2-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUE2Q1lYT1pSUExJMlcmZW5jcnlwdGVkSWQ9QTAyODEyNjgxRThGVEdFR0pBSjUzJmVuY3J5cHRlZEFkSWQ9QTAxNzgzMjdISVE5TVZTVkI0TDQmd2lkZ2V0TmFtZT1zcF9hdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl">
          WALI Free Standing Dual Monitor Stand
        </a>{" "}
        to hang my monitors.
      </li>
      <li>
        The{" "}
        <a href="https://www.amazon.com/Microsoft-PD9-00003-Surface-Dock/dp/B0163HP38W/ref=sr_1_1?keywords=surface+dock&qid=1566417139&s=gateway&sr=8-1">
          Micorsoft Surface Dock
        </a>{" "}
        takes care of all of my port needs with only a single cord running to my
        machine.
      </li>
      <li>
        My current machine is a 13.5" Microsoft Surface Book 2.6GHz i7 with 16GB
        of RAM.
      </li>
    </SmallListStyles>
    <Social />
  </Layout>
)

export default UsesPage
