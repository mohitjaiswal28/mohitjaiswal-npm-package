
const socialProfiles = {
    Website: 'https://mohitjaiswal.com',
    GitHub: 'https://github.com/mohitjaiswal28',
    LinkedIn: 'https://linkedin.com/in/mohitjaiswal28',
    Instagram: 'https://www.instagram.com/mohitjaiswal.28/',
    'X/Twitter': 'https://twitter.com/mohitjaiswal28_',
};

function mohitjaiswal() 
{
    const border = '─'.repeat(58); 
    const margin = ' '.repeat(58); 

    console.log(margin);
    console.log(margin);

    console.log('\x1b[37m%s\x1b[0m', `┌${border}┐`); 

    console.log('\x1b[92m%s\x1b[0m', `${' '.repeat(3)}🔥 Mohit Jaiswal Public Profiles 🔥${' '.repeat(3)}`); 

    console.log(margin);

    Object.entries(socialProfiles).forEach(([platform, link]) => 
    {
        let emoji;
        switch(platform) {
            case 'Website':
                emoji = '🌐';
                break;
            case 'GitHub':
                emoji = '🐱';
                break;
            case 'LinkedIn':
                emoji = '🎓';
                break;
            case 'Instagram':
                emoji = '⭐';
                break;
            case 'X/Twitter':
                emoji = '🐦';
                break;
            default:
                emoji = '😊';
        }

        console.log('\x1b[33m%s\x1b[0m', `${' '.repeat(3)}${emoji} \x1b[4m${platform}:\x1b[0m \x1b[34m${link}\x1b[0m`);
    });

    console.log(margin)

    console.log('\x1b[92m%s\x1b[0m', `${' '.repeat(3)}Thank You ! 🔥${' '.repeat(3)}`); 

    console.log('\x1b[37m%s\x1b[0m', `└${border}┘`); 
    console.log(margin)
    console.log(margin)
}

module.exports = mohitjaiswal;
