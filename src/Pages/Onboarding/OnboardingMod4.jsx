import { Grid, Typography, Box } from "@mui/material";
import Theme from "../../Components/Theme.tsx";
import { useModuleContentStyles } from "../../Styles/Onboarding/useModuleContentStyles";

// Components
import Header from "../../Components/Onboarding/Header";
import ModuleContent from "../../Components/Onboarding/ModuleContent";
import Footer from "../../Components/Onboarding/Footer";

// icons
import boat from "../../Assets/Onboarding/boat.svg";
import question from "../../Assets/Onboarding/question.svg";
import venn from "../../Assets/Onboarding/venn.svg";
import group from "../../Assets/Onboarding/group.svg";
import scrum from "../../Assets/Onboarding/scrum.svg";
import marketing from "../../Assets/Onboarding/marketing.svg";
import nemo from "../../Assets/Onboarding/nemo.svg";
import product from "../../Assets/Onboarding/product.svg";
import research from "../../Assets/Onboarding/research.svg";
import bug from "../../Assets/Onboarding/bug.svg";
import checkmark from "../../Assets/Onboarding/checkmark.svg";

const headerText = {
    title: "Module 4",
    description: "Now what?",
};

const teamNemo = {
    title: "You are on team Nemo",
    paragraph1: "Click below to see a little more what that is, and what that means:",
    linkTitle: "Guidance",
    linkIcon: "doc",
    modalTitle: "You are on team Nemo",
    modalParagraph1:
        "You must always be a part of at least one group. If you join a different group you may leave Nemo. If your duties on the other team end, you must join Nemo again.",
    modalParagraph2:
        "Take the first week or two to get your bearings before you start contributing. You can join a project already in motion or you can start one of your own. If you notice something that can be improved upon, take the initiative and start that project.",
};

const team = {
    title: "How to join other teams",
    paragraph1: "Better to reliably and consistently show to one than dabble in more than one:",
    linkTitle: "Guidance",
    linkIcon: "doc",
    modalTitle: "How to join other teams",
    modalParagraph1:
        "Message the correspondent slack channel of the team introducing yourself and stating that you want to join. ",
    modalParagraph2: "Attend their weekly meetings and perform the tasks assigned.",
    modalParagraph3: "Better to reliably and consistently show to one than dabble in more than one.",
};

const findWork = {
    title: "Find Work to do",
    paragraph1:
        "Now that you know what CV is about, and what team you are on. Let’s see how you can find a task to complete. The first tasks you should complete are already on your Airtable kanban (refer back to Module 2 tools if you are confused). Once those are complete, check the following to find another task.",
    linkTitle: "Pick a task Guide",
    linkIcon: "videoFindWork",
    linkTitle2: "Misc. Tasks",
    linkIcon2: "link",
    linkLocation2: "https://airtable.com/appfJZShN8K4tcWHU/tblXQZfKPAJIjV4cL/viw5qPVwWi7GiDT2J?blocks=hide",
};

const bugs = {
    title: "Bug reports",
    paragraph1:
        "Our website and tool are living creations requiring constant iteration and improvement. The ideas for this improvement come from bug reports created by you and the rest of the team! Here is the link you’ll use to create bug reports–please bookmark it!",
    linkTitle: "Report bugs",
    linkIcon: "link",
    linkLocation: "https://airtable.com/shrzTUdyiDQsnqR3K",
    linkTitle2: "Glossary",
    linkIcon2: "link",
    linkLocation2:
        "https://airtable.com/appfJZShN8K4tcWHU/tblYLt2L646QsTESQ/viwAXRIfCUQNDNs7M/recYE5SnGWsEGsSf5?blocks=hide",
};

const questions = {
    title: "Any questions?",
    paragraph1: "Ask your onboarding buddy. Need a buddy? Ping Seamus in the Nemo Slack Channel to get one.",
};

const doing = {
    title: "See what the teams are doing",
    linkTitle: "Airtable teams list",
    linkIcon: "link",
    linkLocation: "https://airtable.com/shrK9XGUYAHu8gy6k",
};

const button1 = {
    link: "/onboarding-mod3",
    text: "previous",
};

const button2 = {
    link: "/onboarding/#mod",
    text: "homepage",
};

const OnboardingMod4 = () => {
    const classes = useModuleContentStyles();
    return (
        <div>
            <Header text={headerText} />
            <Typography variant="h4" className={classes.mobileHeader}>
                Module 4
            </Typography>
            <Box>
                <Grid container className={classes.mainModuleContentCard}>
                    <Grid item xs={2} className={classes.cardIcon}>
                        <img src={boat} alt="" className={classes.icon} />
                    </Grid>
                    <Grid item xs={10}>
                        <ModuleContent content={teamNemo} />
                    </Grid>
                    <Grid item xs={2} className={classes.cardIcon}>
                        <img src={venn} alt="" className={classes.icon} />
                    </Grid>
                    <Grid item xs={10}>
                        <ModuleContent content={team} />
                    </Grid>
                    <Grid item xs={2} className={classes.cardIcon}>
                        <img src={checkmark} alt="" className={classes.icon} />
                    </Grid>
                    <Grid item xs={10}>
                        <ModuleContent content={findWork} />
                    </Grid>
                    <Grid item xs={2} className={classes.cardIcon}>
                        <img src={bug} alt="" className={classes.icon} />
                    </Grid>
                    <Grid item xs={10}>
                        <ModuleContent content={bugs} />
                    </Grid>
                    <Grid item xs={2} className={classes.cardIcon}>
                        <img src={question} alt="" className={classes.icon} />
                    </Grid>
                    <Grid item xs={10}>
                        <ModuleContent content={questions} />
                    </Grid>
                    <Grid item xs={2} className={classes.cardIcon}>
                        <img src={group} alt="" className={classes.icon} />
                    </Grid>
                    <Grid item xs={10}>
                        <ModuleContent content={doing} />
                    </Grid>
                </Grid>
            </Box>

            <div id="team" style={{ marginBottom: Theme.spacing(5) }}>
                <Grid
                    container
                    spacing={2}
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        margin: "auto",
                        justifyContent: "space-around",
                        textAlign: "center",
                        padding: "0 50px",
                        maxWidth: "77vw",
                        [Theme.breakpoints.down("md")]: {
                            padding: "0 40px",
                        },
                    }}
                >
                    <Grid item sm={6} md={4} lg={2}>
                        <a
                            href="https://airtable.com/appfJZShN8K4tcWHU/tblln6jlsrsqfU0TO/viwrhv3vIo3LqHezH/recg4fqrnyVrBVHYL?blocks=hide"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={scrum} alt="Scrum Team Icon" />
                        </a>
                    </Grid>
                    <Grid item sm={6} md={4} lg={2}>
                        <a
                            href="https://airtable.com/appfJZShN8K4tcWHU/tblln6jlsrsqfU0TO/viwrhv3vIo3LqHezH/recFUnwChbzrVG3Rm?blocks=hide"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={marketing} alt="Marketing Team Icon" />
                        </a>
                    </Grid>
                    <Grid item sm={6} md={4} lg={2}>
                        <a
                            href="https://airtable.com/appfJZShN8K4tcWHU/tblln6jlsrsqfU0TO/viwrhv3vIo3LqHezH/recQNivtgpqnbrVXf?blocks=hide"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={nemo} alt="Nemo Team Icon" />
                        </a>
                    </Grid>
                    <Grid item sm={6} md={4} lg={2}>
                        <a
                            href="https://airtable.com/appfJZShN8K4tcWHU/tblln6jlsrsqfU0TO/viwrhv3vIo3LqHezH/recFcuos1llaUgC3y?blocks=hide"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={product} alt="Product Team Icon" />
                        </a>
                    </Grid>
                    <Grid item sm={6} md={4} lg={2}>
                        <a
                            href="https://airtable.com/appfJZShN8K4tcWHU/tblln6jlsrsqfU0TO/viwrhv3vIo3LqHezH/recDKkzwiQfEEPW8Q?blocks=hide"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={research} alt="User Reasearch Team Icon" />
                        </a>
                    </Grid>
                </Grid>
            </div>

            <Footer button1={button1} button2={button2} />
        </div>
    );
};

export default OnboardingMod4;
