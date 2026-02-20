/**
 * ╔══════════════════════════════════════════════════════════════════════════╗
 * ║   CONFERENCE DEADLINE DASHBOARD  ·  DATA FILE                          ║
 * ║   conferences.js  ·  Edit this file directly to manage all data        ║
 * ╠══════════════════════════════════════════════════════════════════════════╣
 * ║                                                                          ║
 * ║  THREE THINGS YOU CAN EDIT:                                              ║
 * ║                                                                          ║
 * ║  1. MAJORS  — Top-level field of study (CS, EEE, ECE, ME, CE, …)        ║
 * ║  2. DOMAINS — Sub-areas inside a major (e.g. "Quantum Computing")       ║
 * ║  3. CONFERENCES — Individual conference entries inside a major          ║
 * ║                                                                          ║
 * ║  ── HOW TO ADD A NEW MAJOR ──────────────────────────────────────────   ║
 * ║  Copy any existing major block (e.g. the CE block), paste it at the     ║
 * ║  bottom before the closing }; and change:                                ║
 * ║    • The key (e.g.  BME:  )                                              ║
 * ║    • label, icon, domains, conferences                                  ║
 * ║                                                                          ║
 * ║  ── HOW TO ADD A NEW DOMAIN ─────────────────────────────────────────   ║
 * ║  Inside the major's `domains` object, add one line:                     ║
 * ║    'Domain Name': { color:'#hex', bg:'rgba(…)', border:'rgba(…)' },     ║
 * ║  Pick a palette entry from the PALETTE REFERENCE at the end of file.    ║
 * ║                                                                          ║
 * ║  ── HOW TO ADD A NEW CONFERENCE ────────────────────────────────────    ║
 * ║  Inside the major's `conferences` array, append:                         ║
 * ║    {                                                                     ║
 * ║      abbr    : 'SHORT',         // shown in table & cards               ║
 * ║      full    : 'Full Name …',   // full conference title                ║
 * ║      domain  : 'Domain Name',   // must match a key in this major's domains
 * ║      year    : 2026,            // number                               ║
 * ║      if      : 7.2,             // impact factor, number                ║
 * ║      tier    : 'A',             // 'A*' | 'A' | 'B' | 'C'             ║
 * ║      sub_dl  : '2025-09-15',    // submission deadline  YYYY-MM-DD     ║
 * ║      notif_dl: '2025-12-01',    // notification date    YYYY-MM-DD     ║
 * ║      url     : 'https://…',     // conference website                   ║
 * ║    },                                                                    ║
 * ║                                                                          ║
 * ║  Save → commit → push to GitHub. The dashboard reads this on load.      ║
 * ╚══════════════════════════════════════════════════════════════════════════╝
 */

const DASHBOARD_DATA = {

    /* ══════════════════════════════════════════════════════════════════
       COMPUTER SCIENCE
    ══════════════════════════════════════════════════════════════════ */
    CS: {
        label: 'Computer Science',
        icon: '💻',

        // ── Domains ─────────────────────────────────────────────────────
        domains: {
            'AI/ML': { color: '#22d3ee', bg: 'rgba(34,211,238,0.1)', border: 'rgba(34,211,238,0.22)' },
            'NLP': { color: '#a78bfa', bg: 'rgba(167,139,250,0.1)', border: 'rgba(167,139,250,0.22)' },
            'Security': { color: '#f87171', bg: 'rgba(248,113,113,0.1)', border: 'rgba(248,113,113,0.22)' },
            'Data Mining': { color: '#f0b429', bg: 'rgba(240,180,41,0.12)', border: 'rgba(240,180,41,0.25)' },
            'Systems': { color: '#fb923c', bg: 'rgba(251,146,60,0.1)', border: 'rgba(251,146,60,0.22)' },
            'HCI': { color: '#f472b6', bg: 'rgba(244,114,182,0.1)', border: 'rgba(244,114,182,0.22)' },
            'Vision': { color: '#4ade80', bg: 'rgba(74,222,128,0.1)', border: 'rgba(74,222,128,0.22)' },
            // ↓ Add new CS domains here
        },

        // ── Conferences ──────────────────────────────────────────────────
        conferences: [

            // AI / ML
            { abbr: 'NeurIPS', full: 'Conference on Neural Information Processing Systems', domain: 'AI/ML', year: 2025, if: 18.8, tier: 'A*', sub_dl: '2025-05-22', notif_dl: '2025-09-25', url: 'https://neurips.cc' },
            { abbr: 'ICML', full: 'International Conference on Machine Learning', domain: 'AI/ML', year: 2025, if: 17.5, tier: 'A*', sub_dl: '2025-01-23', notif_dl: '2025-05-01', url: 'https://icml.cc' },
            { abbr: 'ICLR', full: 'International Conference on Learning Representations', domain: 'AI/ML', year: 2025, if: 16.2, tier: 'A*', sub_dl: '2024-10-01', notif_dl: '2025-01-22', url: 'https://iclr.cc' },
            { abbr: 'AAAI', full: 'AAAI Conference on Artificial Intelligence', domain: 'AI/ML', year: 2025, if: 13.4, tier: 'A*', sub_dl: '2024-08-07', notif_dl: '2024-11-09', url: 'https://aaai.org' },
            { abbr: 'IJCAI', full: 'International Joint Conference on Artificial Intelligence', domain: 'AI/ML', year: 2025, if: 10.1, tier: 'A*', sub_dl: '2025-01-16', notif_dl: '2025-04-28', url: 'https://ijcai25.org' },

            // NLP
            { abbr: 'ACL', full: 'Annual Meeting of the Association for Computational Linguistics', domain: 'NLP', year: 2025, if: 15.1, tier: 'A*', sub_dl: '2025-02-15', notif_dl: '2025-05-15', url: 'https://aclanthology.org' },
            { abbr: 'EMNLP', full: 'Conference on Empirical Methods in Natural Language Processing', domain: 'NLP', year: 2025, if: 12.5, tier: 'A*', sub_dl: '2025-06-17', notif_dl: '2025-09-17', url: 'https://2025.emnlp.org' },
            { abbr: 'NAACL', full: 'North American Chapter of the ACL', domain: 'NLP', year: 2025, if: 9.1, tier: 'A', sub_dl: '2024-12-15', notif_dl: '2025-03-06', url: 'https://2025.naacl.org' },
            { abbr: 'COLING', full: 'International Conference on Computational Linguistics', domain: 'NLP', year: 2025, if: 7.0, tier: 'A', sub_dl: '2024-09-16', notif_dl: '2024-11-29', url: 'https://coling2025.org' },
            { abbr: 'EACL', full: 'Conference of the European Chapter of the ACL', domain: 'NLP', year: 2026, if: 5.4, tier: 'A', sub_dl: '2025-10-02', notif_dl: '2026-01-19', url: 'https://2026.eacl.org' },

            // Vision
            { abbr: 'CVPR', full: 'Conference on Computer Vision and Pattern Recognition', domain: 'Vision', year: 2025, if: 14.9, tier: 'A*', sub_dl: '2024-11-14', notif_dl: '2025-02-26', url: 'https://cvpr.thecvf.com' },
            { abbr: 'ICCV', full: 'International Conference on Computer Vision', domain: 'Vision', year: 2025, if: 11.4, tier: 'A*', sub_dl: '2025-03-07', notif_dl: '2025-06-27', url: 'https://iccv2025.thecvf.com' },
            { abbr: 'ECCV', full: 'European Conference on Computer Vision', domain: 'Vision', year: 2026, if: 8.1, tier: 'A*', sub_dl: '2026-03-05', notif_dl: '2026-07-01', url: 'https://eccv2026.eu' },

            // Security
            { abbr: 'USENIX Sec', full: 'USENIX Security Symposium', domain: 'Security', year: 2025, if: 12.8, tier: 'A*', sub_dl: '2025-02-04', notif_dl: '2025-05-20', url: 'https://www.usenix.org/conference/usenixsecurity25' },
            { abbr: 'CCS', full: 'ACM Conference on Computer and Communications Security', domain: 'Security', year: 2025, if: 12.1, tier: 'A*', sub_dl: '2025-01-14', notif_dl: '2025-05-01', url: 'https://www.sigsac.org/ccs' },
            { abbr: 'S&P', full: 'IEEE Symposium on Security and Privacy', domain: 'Security', year: 2025, if: 11.0, tier: 'A*', sub_dl: '2024-11-14', notif_dl: '2025-02-11', url: 'https://sp2025.ieee-security.org' },
            { abbr: 'NDSS', full: 'Network and Distributed System Security Symposium', domain: 'Security', year: 2025, if: 8.8, tier: 'A*', sub_dl: '2024-09-04', notif_dl: '2024-12-01', url: 'https://ndss-symposium.org' },
            { abbr: 'ACSAC', full: 'Annual Computer Security Applications Conference', domain: 'Security', year: 2025, if: 5.6, tier: 'A', sub_dl: '2025-06-05', notif_dl: '2025-08-15', url: 'https://www.acsac.org' },
            { abbr: 'PoPETs', full: 'Proceedings on Privacy Enhancing Technologies Symposium', domain: 'Security', year: 2025, if: 3.7, tier: 'B', sub_dl: '2025-08-31', notif_dl: '2025-11-30', url: 'https://petsymposium.org' },
            { abbr: 'PETS', full: 'Privacy Enhancing Technologies Symposium', domain: 'Security', year: 2026, if: 3.7, tier: 'B', sub_dl: '2025-11-30', notif_dl: '2026-02-28', url: 'https://petsymposium.org' },

            // Data Mining
            { abbr: 'KDD', full: 'ACM SIGKDD Conference on Knowledge Discovery and Data Mining', domain: 'Data Mining', year: 2025, if: 11.6, tier: 'A*', sub_dl: '2025-02-01', notif_dl: '2025-05-01', url: 'https://kdd.org' },
            { abbr: 'WWW', full: 'The Web Conference', domain: 'Data Mining', year: 2025, if: 10.3, tier: 'A*', sub_dl: '2024-10-07', notif_dl: '2025-01-17', url: 'https://www2025.thewebconf.org' },
            { abbr: 'SIGIR', full: 'ACM SIGIR Conference on Research and Development in Information Retrieval', domain: 'Data Mining', year: 2025, if: 8.6, tier: 'A*', sub_dl: '2025-01-22', notif_dl: '2025-04-10', url: 'https://sigir2025.dei.unipd.it' },
            { abbr: 'RecSys', full: 'ACM Conference on Recommender Systems', domain: 'Data Mining', year: 2025, if: 7.8, tier: 'A', sub_dl: '2025-04-21', notif_dl: '2025-07-10', url: 'https://recsys.acm.org/recsys25' },
            { abbr: 'CIKM', full: 'ACM International Conference on Information and Knowledge Management', domain: 'Data Mining', year: 2025, if: 6.8, tier: 'A', sub_dl: '2025-05-09', notif_dl: '2025-07-20', url: 'https://cikm2025.org' },
            { abbr: 'ICDM', full: 'IEEE International Conference on Data Mining', domain: 'Data Mining', year: 2025, if: 6.2, tier: 'A', sub_dl: '2025-06-10', notif_dl: '2025-08-15', url: 'https://icdm2025.org' },
            { abbr: 'WSDM', full: 'ACM International Conference on Web Search and Data Mining', domain: 'Data Mining', year: 2026, if: 6.0, tier: 'A', sub_dl: '2025-08-12', notif_dl: '2025-10-31', url: 'https://www.wsdm-conference.org/2026' },
            { abbr: 'ECIR', full: 'European Conference on Information Retrieval', domain: 'Data Mining', year: 2026, if: 5.1, tier: 'B', sub_dl: '2025-09-22', notif_dl: '2025-11-24', url: 'https://ecir2026.eu' },
            { abbr: 'ICWSM', full: 'International AAAI Conference on Web and Social Media', domain: 'Data Mining', year: 2026, if: 4.9, tier: 'A', sub_dl: '2025-11-01', notif_dl: '2026-02-01', url: 'https://www.icwsm.org/2026' },
            { abbr: 'HyperText', full: 'ACM Conference on Hypertext and Social Media', domain: 'Data Mining', year: 2025, if: 4.2, tier: 'B', sub_dl: '2025-03-15', notif_dl: '2025-05-10', url: 'https://ht.acm.org/ht2025' },
            { abbr: 'ASONAM', full: 'IEEE/ACM International Conference on Advances in Social Networks Analysis and Mining', domain: 'Data Mining', year: 2025, if: 3.9, tier: 'B', sub_dl: '2025-06-01', notif_dl: '2025-07-15', url: 'https://asonam.cpsc.ucalgary.ca/2025' },

            // Systems
            { abbr: 'SIGMOD', full: 'ACM International Conference on Management of Data', domain: 'Systems', year: 2025, if: 9.8, tier: 'A*', sub_dl: '2025-01-16', notif_dl: '2025-04-15', url: 'https://2025.sigmod.org' },
            { abbr: 'VLDB', full: 'Very Large Data Bases Conference', domain: 'Systems', year: 2025, if: 9.6, tier: 'A*', sub_dl: '2025-03-01', notif_dl: '2025-05-15', url: 'https://vldb.org' },
            { abbr: 'OSDI', full: 'USENIX Symposium on Operating Systems Design and Implementation', domain: 'Systems', year: 2025, if: 8.2, tier: 'A*', sub_dl: '2024-12-03', notif_dl: '2025-03-04', url: 'https://www.usenix.org/conference/osdi25' },
            { abbr: 'SOSP', full: 'ACM Symposium on Operating Systems Principles', domain: 'Systems', year: 2025, if: 7.4, tier: 'A*', sub_dl: '2025-04-15', notif_dl: '2025-08-01', url: 'https://sosp2025.sosp.org' },
            { abbr: 'ICSE', full: 'International Conference on Software Engineering', domain: 'Systems', year: 2026, if: 7.2, tier: 'A*', sub_dl: '2025-07-01', notif_dl: '2025-11-01', url: 'https://conf.researchr.org/home/icse-2026' },
            { abbr: 'MobiSys', full: 'ACM International Conference on Mobile Systems', domain: 'Systems', year: 2025, if: 4.8, tier: 'A', sub_dl: '2024-12-05', notif_dl: '2025-03-15', url: 'https://www.sigmobile.org/mobisys/2025' },

            // HCI
            { abbr: 'CHI', full: 'ACM Conference on Human Factors in Computing Systems', domain: 'HCI', year: 2025, if: 7.5, tier: 'A*', sub_dl: '2024-09-13', notif_dl: '2025-01-17', url: 'https://chi2025.acm.org' },
            { abbr: 'UIST', full: 'ACM Symposium on User Interface Software and Technology', domain: 'HCI', year: 2025, if: 6.5, tier: 'A', sub_dl: '2025-04-03', notif_dl: '2025-07-10', url: 'https://uist.acm.org/2025' },
            { abbr: 'CSCW', full: 'ACM Conference on Computer-Supported Cooperative Work', domain: 'HCI', year: 2026, if: 5.2, tier: 'A', sub_dl: '2025-10-15', notif_dl: '2026-01-10', url: 'https://cscw.acm.org' },

            // ↓ Add new CS conferences here
        ],
    },


    /* ══════════════════════════════════════════════════════════════════
       ELECTRICAL & ELECTRONIC ENGINEERING
    ══════════════════════════════════════════════════════════════════ */
    EEE: {
        label: 'Electrical & Electronic Engineering',
        icon: '⚡',

        domains: {
            'Power Systems': { color: '#f0b429', bg: 'rgba(240,180,41,0.12)', border: 'rgba(240,180,41,0.25)' },
            'Power Electronics': { color: '#fb923c', bg: 'rgba(251,146,60,0.1)', border: 'rgba(251,146,60,0.22)' },
            'Smart Grid': { color: '#22d3ee', bg: 'rgba(34,211,238,0.1)', border: 'rgba(34,211,238,0.22)' },
            'Renewable Energy': { color: '#4ade80', bg: 'rgba(74,222,128,0.1)', border: 'rgba(74,222,128,0.22)' },
            'High Voltage': { color: '#f87171', bg: 'rgba(248,113,113,0.1)', border: 'rgba(248,113,113,0.22)' },
            'Energy Storage': { color: '#a78bfa', bg: 'rgba(167,139,250,0.1)', border: 'rgba(167,139,250,0.22)' },
            // ↓ Add new EEE domains here
        },

        conferences: [
            { abbr: 'PESGM', full: 'IEEE Power & Energy Society General Meeting', domain: 'Power Systems', year: 2025, if: 5.1, tier: 'A*', sub_dl: '2024-12-01', notif_dl: '2025-02-15', url: 'https://pes-gm.org' },
            { abbr: 'ECCE', full: 'IEEE Energy Conversion Congress and Exposition', domain: 'Power Electronics', year: 2025, if: 4.5, tier: 'A', sub_dl: '2025-03-01', notif_dl: '2025-05-15', url: 'https://www.ieeecce.org' },
            { abbr: 'APEC', full: 'Applied Power Electronics Conference and Exposition', domain: 'Power Electronics', year: 2026, if: 4.2, tier: 'A', sub_dl: '2025-07-07', notif_dl: '2025-09-15', url: 'https://apec-conf.org' },
            { abbr: 'ISGT', full: 'IEEE PES Innovative Smart Grid Technologies', domain: 'Smart Grid', year: 2026, if: 3.8, tier: 'A', sub_dl: '2025-09-01', notif_dl: '2025-11-15', url: 'https://isgt2026.org' },
            { abbr: 'PVSC', full: 'IEEE Photovoltaic Specialists Conference', domain: 'Renewable Energy', year: 2025, if: 3.6, tier: 'A', sub_dl: '2025-01-31', notif_dl: '2025-03-31', url: 'https://www.ieee-pvsc.org' },
            { abbr: 'T&D', full: 'IEEE PES Transmission and Distribution Conference', domain: 'Power Systems', year: 2026, if: 3.5, tier: 'B', sub_dl: '2025-10-01', notif_dl: '2025-12-01', url: 'https://ieeetd2026.org' },
            { abbr: 'EPE', full: 'European Conference on Power Electronics and Applications', domain: 'Power Electronics', year: 2025, if: 3.2, tier: 'B', sub_dl: '2025-04-01', notif_dl: '2025-06-01', url: 'https://epe2025.org' },
            { abbr: 'CIGRE', full: 'CIGRE Session — International Council on Large Electric Systems', domain: 'High Voltage', year: 2026, if: 2.8, tier: 'B', sub_dl: '2025-11-01', notif_dl: '2026-02-01', url: 'https://www.cigre.org' },
            { abbr: 'ESTS', full: 'IEEE Electric Ship Technologies Symposium', domain: 'Energy Storage', year: 2025, if: 2.4, tier: 'B', sub_dl: '2024-12-01', notif_dl: '2025-02-01', url: 'https://ieeests.org' },
            { abbr: 'UPEC', full: 'International Universities Power Engineering Conference', domain: 'Power Systems', year: 2025, if: 2.1, tier: 'C', sub_dl: '2025-04-01', notif_dl: '2025-06-01', url: 'https://upec2025.org' },
            // ↓ Add new EEE conferences here
        ],
    },


    /* ══════════════════════════════════════════════════════════════════
       ELECTRICAL & COMPUTER ENGINEERING
    ══════════════════════════════════════════════════════════════════ */
    ECE: {
        label: 'Electrical & Computer Engineering',
        icon: '🔌',

        domains: {
            'Signal Processing': { color: '#22d3ee', bg: 'rgba(34,211,238,0.1)', border: 'rgba(34,211,238,0.22)' },
            'Embedded Systems': { color: '#fb923c', bg: 'rgba(251,146,60,0.1)', border: 'rgba(251,146,60,0.22)' },
            'Communications': { color: '#a78bfa', bg: 'rgba(167,139,250,0.1)', border: 'rgba(167,139,250,0.22)' },
            'VLSI/FPGA': { color: '#f0b429', bg: 'rgba(240,180,41,0.12)', border: 'rgba(240,180,41,0.25)' },
            'RF/Microwave': { color: '#f472b6', bg: 'rgba(244,114,182,0.1)', border: 'rgba(244,114,182,0.22)' },
            'Control Systems': { color: '#4ade80', bg: 'rgba(74,222,128,0.1)', border: 'rgba(74,222,128,0.22)' },
            'IoT': { color: '#f87171', bg: 'rgba(248,113,113,0.1)', border: 'rgba(248,113,113,0.22)' },
            // ↓ Add new ECE domains here
        },

        conferences: [
            { abbr: 'ICASSP', full: 'IEEE International Conference on Acoustics, Speech and Signal Processing', domain: 'Signal Processing', year: 2026, if: 6.1, tier: 'A*', sub_dl: '2025-09-15', notif_dl: '2025-12-15', url: 'https://2026.ieeeicassp.org' },
            { abbr: 'ICC', full: 'IEEE International Conference on Communications', domain: 'Communications', year: 2025, if: 5.6, tier: 'A*', sub_dl: '2024-10-07', notif_dl: '2025-01-06', url: 'https://icc2025.ieee-icc.org' },
            { abbr: 'DAC', full: 'Design Automation Conference', domain: 'VLSI/FPGA', year: 2025, if: 4.8, tier: 'A*', sub_dl: '2024-11-19', notif_dl: '2025-02-24', url: 'https://dac.com' },
            { abbr: 'GLOBECOM', full: 'IEEE Global Communications Conference', domain: 'Communications', year: 2025, if: 5.2, tier: 'A', sub_dl: '2025-04-01', notif_dl: '2025-07-01', url: 'https://globecom2025.ieee-globecom.org' },
            { abbr: 'ICCAD', full: 'IEEE/ACM International Conference on Computer-Aided Design', domain: 'VLSI/FPGA', year: 2025, if: 4.3, tier: 'A*', sub_dl: '2025-05-22', notif_dl: '2025-07-28', url: 'https://iccad.com' },
            { abbr: 'CDC', full: 'IEEE Conference on Decision and Control', domain: 'Control Systems', year: 2025, if: 4.1, tier: 'A*', sub_dl: '2025-03-10', notif_dl: '2025-07-01', url: 'https://cdc2025.ieeecss.org' },
            { abbr: 'DATE', full: 'Design, Automation and Test in Europe', domain: 'VLSI/FPGA', year: 2026, if: 3.9, tier: 'A', sub_dl: '2025-09-22', notif_dl: '2025-12-01', url: 'https://www.date-conference.com' },
            { abbr: 'RTAS', full: 'IEEE Real-Time and Embedded Technology and Applications Symposium', domain: 'Embedded Systems', year: 2025, if: 3.8, tier: 'A', sub_dl: '2024-10-30', notif_dl: '2025-01-20', url: 'https://2025.rtas.org' },
            { abbr: 'IoTDI', full: 'IEEE International Conference on Internet-of-Things Design and Implementation', domain: 'IoT', year: 2026, if: 3.6, tier: 'A', sub_dl: '2025-10-15', notif_dl: '2026-01-10', url: 'https://conferences.computer.org/iotdi' },
            { abbr: 'IMS', full: 'IEEE MTT-S International Microwave Symposium', domain: 'RF/Microwave', year: 2025, if: 3.5, tier: 'A', sub_dl: '2024-12-10', notif_dl: '2025-02-18', url: 'https://ims2025.org' },
            { abbr: 'EMBC', full: 'IEEE Engineering in Medicine and Biology Conference', domain: 'Signal Processing', year: 2025, if: 3.4, tier: 'A', sub_dl: '2025-02-15', notif_dl: '2025-04-30', url: 'https://embc.embs.org/2025' },
            { abbr: 'WCNC', full: 'IEEE Wireless Communications and Networking Conference', domain: 'Communications', year: 2026, if: 3.2, tier: 'B', sub_dl: '2025-09-15', notif_dl: '2025-11-20', url: 'https://wcnc2026.ieee-wcnc.org' },
            { abbr: 'ISLPED', full: 'International Symposium on Low Power Electronics and Design', domain: 'VLSI/FPGA', year: 2025, if: 3.1, tier: 'B', sub_dl: '2025-03-13', notif_dl: '2025-05-08', url: 'https://www.islped.org' },
            // ↓ Add new ECE conferences here
        ],
    },


    /* ══════════════════════════════════════════════════════════════════
       MECHANICAL ENGINEERING
    ══════════════════════════════════════════════════════════════════ */
    ME: {
        label: 'Mechanical Engineering',
        icon: '⚙️',

        domains: {
            'Thermodynamics': { color: '#f87171', bg: 'rgba(248,113,113,0.1)', border: 'rgba(248,113,113,0.22)' },
            'Fluid Mechanics': { color: '#22d3ee', bg: 'rgba(34,211,238,0.1)', border: 'rgba(34,211,238,0.22)' },
            'Manufacturing': { color: '#fb923c', bg: 'rgba(251,146,60,0.1)', border: 'rgba(251,146,60,0.22)' },
            'Robotics': { color: '#a78bfa', bg: 'rgba(167,139,250,0.1)', border: 'rgba(167,139,250,0.22)' },
            'Solid Mechanics': { color: '#f0b429', bg: 'rgba(240,180,41,0.12)', border: 'rgba(240,180,41,0.25)' },
            'MEMS/Nano': { color: '#4ade80', bg: 'rgba(74,222,128,0.1)', border: 'rgba(74,222,128,0.22)' },
            'Design/CAD': { color: '#f472b6', bg: 'rgba(244,114,182,0.1)', border: 'rgba(244,114,182,0.22)' },
            // ↓ Add new ME domains here
        },

        conferences: [
            { abbr: 'ICRA', full: 'IEEE International Conference on Robotics and Automation', domain: 'Robotics', year: 2025, if: 6.8, tier: 'A*', sub_dl: '2024-09-15', notif_dl: '2025-01-31', url: 'https://2025.ieee-icra.org' },
            { abbr: 'IROS', full: 'IEEE/RSJ International Conference on Intelligent Robots and Systems', domain: 'Robotics', year: 2025, if: 5.9, tier: 'A*', sub_dl: '2025-03-01', notif_dl: '2025-06-30', url: 'https://iros2025.org' },
            { abbr: 'IMECE', full: 'ASME International Mechanical Engineering Congress and Exposition', domain: 'Manufacturing', year: 2025, if: 2.6, tier: 'A', sub_dl: '2025-04-07', notif_dl: '2025-06-16', url: 'https://event.asme.org/IMECE' },
            { abbr: 'ASME Turbo', full: 'ASME Turbo Expo: Turbomachinery Technical Conference', domain: 'Fluid Mechanics', year: 2026, if: 2.8, tier: 'A', sub_dl: '2025-09-08', notif_dl: '2025-11-17', url: 'https://event.asme.org/Turbo-Expo' },
            { abbr: 'IDETC', full: 'ASME International Design Engineering Technical Conferences', domain: 'Design/CAD', year: 2025, if: 2.4, tier: 'B', sub_dl: '2025-02-03', notif_dl: '2025-04-07', url: 'https://event.asme.org/IDETC-CIE' },
            { abbr: 'MSEC', full: 'ASME Manufacturing Science and Engineering Conference', domain: 'Manufacturing', year: 2025, if: 2.1, tier: 'B', sub_dl: '2024-12-16', notif_dl: '2025-02-10', url: 'https://event.asme.org/MSEC' },
            { abbr: 'ITHERM', full: 'IEEE Intersociety Conference on Thermal and Thermomechanical Phenomena', domain: 'Thermodynamics', year: 2026, if: 2.2, tier: 'B', sub_dl: '2025-11-01', notif_dl: '2026-01-15', url: 'https://itherm.org' },
            { abbr: 'IPACK', full: 'ASME InterPACK — Packaging and Integration of Electronic Systems', domain: 'MEMS/Nano', year: 2025, if: 1.9, tier: 'C', sub_dl: '2025-01-06', notif_dl: '2025-03-03', url: 'https://event.asme.org/ipack' },
            { abbr: 'ISOPE', full: 'International Ocean and Polar Engineering Conference', domain: 'Fluid Mechanics', year: 2025, if: 1.8, tier: 'C', sub_dl: '2024-12-15', notif_dl: '2025-02-15', url: 'https://isope.org' },
            { abbr: 'ACTUATOR', full: 'International Conference and Exhibition on New Actuator Systems', domain: 'Robotics', year: 2026, if: 1.7, tier: 'C', sub_dl: '2025-10-01', notif_dl: '2025-12-01', url: 'https://www.actuator.de' },
            // ↓ Add new ME conferences here
        ],
    },


    /* ══════════════════════════════════════════════════════════════════
       CIVIL ENGINEERING
    ══════════════════════════════════════════════════════════════════ */
    CE: {
        label: 'Civil Engineering',
        icon: '🏗️',

        domains: {
            'Structural': { color: '#f0b429', bg: 'rgba(240,180,41,0.12)', border: 'rgba(240,180,41,0.25)' },
            'Geotechnical': { color: '#fb923c', bg: 'rgba(251,146,60,0.1)', border: 'rgba(251,146,60,0.22)' },
            'Transportation': { color: '#22d3ee', bg: 'rgba(34,211,238,0.1)', border: 'rgba(34,211,238,0.22)' },
            'Environmental': { color: '#4ade80', bg: 'rgba(74,222,128,0.1)', border: 'rgba(74,222,128,0.22)' },
            'Construction Mgmt': { color: '#a78bfa', bg: 'rgba(167,139,250,0.1)', border: 'rgba(167,139,250,0.22)' },
            'Water Resources': { color: '#38bdf8', bg: 'rgba(56,189,248,0.1)', border: 'rgba(56,189,248,0.22)' },
            'Materials': { color: '#f87171', bg: 'rgba(248,113,113,0.1)', border: 'rgba(248,113,113,0.22)' },
            // ↓ Add new CE domains here
        },

        conferences: [
            { abbr: 'TRB', full: 'Transportation Research Board Annual Meeting', domain: 'Transportation', year: 2026, if: 3.2, tier: 'A*', sub_dl: '2025-08-01', notif_dl: '2025-10-15', url: 'https://www.trb.org' },
            { abbr: 'ICSMGE', full: 'International Conference on Soil Mechanics and Geotechnical Engineering', domain: 'Geotechnical', year: 2025, if: 2.8, tier: 'A*', sub_dl: '2024-11-01', notif_dl: '2025-01-15', url: 'https://www.issmge.org' },
            { abbr: 'ASCE Struct', full: 'ASCE Structures Congress', domain: 'Structural', year: 2026, if: 2.1, tier: 'A', sub_dl: '2025-10-01', notif_dl: '2025-12-15', url: 'https://www.structurescongress.org' },
            { abbr: 'ICASP', full: 'International Conference on Applications of Statistics and Probability in Civil Engineering', domain: 'Structural', year: 2027, if: 2.4, tier: 'A', sub_dl: '2026-06-01', notif_dl: '2026-09-01', url: 'https://icasp2027.org' },
            { abbr: 'WEF-WEFTEC', full: 'Water Environment Federation Technical Exhibition and Conference', domain: 'Water Resources', year: 2025, if: 2.3, tier: 'A', sub_dl: '2025-03-14', notif_dl: '2025-06-01', url: 'https://www.weftec.org' },
            { abbr: 'GeoTrans', full: 'ASCE Geo-Congress: Geotechnical Frontiers', domain: 'Geotechnical', year: 2026, if: 1.9, tier: 'A', sub_dl: '2025-07-14', notif_dl: '2025-10-01', url: 'https://www.asce.org/geocongress' },
            { abbr: 'ICTIS', full: 'International Conference on Transportation Information and Safety', domain: 'Transportation', year: 2025, if: 2.0, tier: 'B', sub_dl: '2025-03-01', notif_dl: '2025-05-01', url: 'https://ictis2025.org' },
            { abbr: 'EWRI', full: 'ASCE Environmental and Water Resources Institute Congress', domain: 'Water Resources', year: 2025, if: 1.7, tier: 'B', sub_dl: '2024-10-01', notif_dl: '2024-12-01', url: 'https://www.asce.org/ewri' },
            { abbr: 'CSCE', full: 'Canadian Society for Civil Engineering Annual Conference', domain: 'Construction Mgmt', year: 2025, if: 1.6, tier: 'B', sub_dl: '2024-12-01', notif_dl: '2025-02-01', url: 'https://www.csce.ca' },
            { abbr: 'ASCE Eng Mech', full: 'ASCE Engineering Mechanics Institute Conference', domain: 'Structural', year: 2025, if: 1.5, tier: 'C', sub_dl: '2025-01-15', notif_dl: '2025-03-01', url: 'https://www.asce.org/emi' },
            // ↓ Add new CE conferences here
        ],
    },


    /* ══════════════════════════════════════════════════════════════════
       ↓ ADD A NEW MAJOR FIELD HERE
       Copy the template block below, uncomment it, and fill it in.
    ══════════════════════════════════════════════════════════════════
  
    BME: {
      label: 'Biomedical Engineering',
      icon : '🧬',
  
      domains: {
        'Biomechanics'   : { color: '#34d399', bg: 'rgba(52,211,153,0.1)',  border: 'rgba(52,211,153,0.22)'  },
        'Medical Imaging': { color: '#60a5fa', bg: 'rgba(96,165,250,0.1)',  border: 'rgba(96,165,250,0.22)'  },
        'Neural Eng'     : { color: '#c084fc', bg: 'rgba(192,132,252,0.1)', border: 'rgba(192,132,252,0.22)' },
        // ↓ Add new BME domains here
      },
  
      conferences: [
        {
          abbr    : 'EMBC',
          full    : 'IEEE Engineering in Medicine and Biology Conference',
          domain  : 'Medical Imaging',
          year    : 2025,
          if      : 3.4,
          tier    : 'A',
          sub_dl  : '2025-02-15',
          notif_dl: '2025-04-30',
          url     : 'https://embc.embs.org/2025',
        },
        // ↓ Add new BME conferences here
      ],
    },
  
    ══════════════════════════════════════════════════════════════════ */

};  // ← end of DASHBOARD_DATA — do not remove this line


/* ══════════════════════════════════════════════════════════════════
   PALETTE REFERENCE
   Copy any row's values into your domain definition.
══════════════════════════════════════════════════════════════════

   Name       color        bg                          border
   ────────── ──────────── ─────────────────────────── ────────────────────────────
   Teal       #22d3ee      rgba(34,211,238,0.1)         rgba(34,211,238,0.22)
   Violet     #a78bfa      rgba(167,139,250,0.1)        rgba(167,139,250,0.22)
   Red        #f87171      rgba(248,113,113,0.1)        rgba(248,113,113,0.22)
   Gold       #f0b429      rgba(240,180,41,0.12)        rgba(240,180,41,0.25)
   Orange     #fb923c      rgba(251,146,60,0.1)         rgba(251,146,60,0.22)
   Pink       #f472b6      rgba(244,114,182,0.1)        rgba(244,114,182,0.22)
   Green      #4ade80      rgba(74,222,128,0.1)         rgba(74,222,128,0.22)
   Sky        #38bdf8      rgba(56,189,248,0.1)         rgba(56,189,248,0.22)
   Fuchsia    #e879f9      rgba(232,121,249,0.1)        rgba(232,121,249,0.22)
   Emerald    #34d399      rgba(52,211,153,0.1)         rgba(52,211,153,0.22)
   Amber      #fbbf24      rgba(251,191,36,0.1)         rgba(251,191,36,0.22)
   Blue       #60a5fa      rgba(96,165,250,0.1)         rgba(96,165,250,0.22)
   Purple     #c084fc      rgba(192,132,252,0.1)        rgba(192,132,252,0.22)
   Lime       #a3e635      rgba(163,230,53,0.1)         rgba(163,230,53,0.22)
   Rose       #fb7185      rgba(251,113,133,0.1)        rgba(251,113,133,0.22)

══════════════════════════════════════════════════════════════════ */