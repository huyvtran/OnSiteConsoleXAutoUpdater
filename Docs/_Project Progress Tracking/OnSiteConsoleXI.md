# OnSiteConsoleXI


### Security/Privacy Features

Add page level user access list for all pages.  Designated Admins: access to restriction settings to add/delete/modify user access to ConsoleXI pages

### Convert Pre-OnSite Reports and store in OnSite/Console DB

Copy and convert all reports from on system to new system.  

- system continuity
- search user/date/unit etc.

### Accident/incident Module

- Track/Document accidents and incidents: Documents are stored in Incidents DB;

- Forms and Reports can be printed.

- Documentation can include Photos and other attachments

### Paper Form Conversions

Replace existing forms with paperless forms. These have the advantage of not
getting lost (DB Search/Display/Print). Documents can be edited (Revision
history is always saved in CouchDB). Custom views and stats can be generated
depending on doc type...

- Application Documents

- iPad version of employee application

- Reduces errors: Copy/Paste instead of re-typing employee information into QuickBooks or other places where employee info is added to digital documents

- can also have website version of this form

- Web form is submitted via email then uploaded for security reasons (not have database exposed in public website code...)

- Documentation like DL, work authorization, citizenship docs can be captured using phone with OnSiteXI Mgmt. credentials

- Documents and forms generated by Lead Techs at various WorkSites

- Safety Near-Miss reports

- Accident reports (see above)

- Any other type of document which is currently printed and filled out

- *We need to get a full list of such forms to be converted in order to appropriately assess programming time*

### Badge/Awards interface

Badges give techs a sense of accomplishment. They build esprit de corps. They
can greatly improve morale and help keep good technicians. Awarding badges can
be done through the awards interface. Certain badges can be earned automatically
while others require a specific award.

- Add/Edit Tech Badges and awards: Badges and awards can recognize technician achievements, service awards.

- Client Badges: current client to which the tech is assigned,

- Client Commendation Award: Techs who receive documented commendation from our clients,

Examples:

- others awards/badges: TBD

- Tech Skill Badges: based on tech hours accumulation Ex: M-Tech I (0-500 billable hours completed), M-Tech II (501-4000 billable hours completed) ...

- Training Badges: Badges for completed training (Forklift, Overhead Crane, PEC, etc.) Safety Training (Techs with at least 12 months of consecutive safety meeting attendance...),

- Work Anniversary Award,

- Years of Service at SESA

### Built-in Email Functions

Send out schedule, DPS, Invoices, and Pre-Auth Requests etc. Other features TBD

### Payroll UI

Payroll UI shows complete payroll report (editable) to replace the Excel
template

- All edits made here instead of printed paper version

- Edits are tracked by user (Chris/Chilo/Saul) to show who made the edits

- Document is locked (can no longer be edited after report is saved to Payroll Report DB)

- Payroll document is saved and can be viewed post-payroll

- Payroll Report DB holds these document (searchable/viewable)

### bulk-docs editor: Employee/Reports/Worksites…

Interface to easily edit all DB docs of a certain type (add fields, delete
fields, edit field values… etc.) to conform them to a standard…

### Customizable report generator

User-Selectable Keys for creating custom reports…

### Flagged reports and hours tracking

Shift hours greater than Site hours are flagged and can be reviewed and approved
in a single UI element

### In-App msging

- Full SMS messaging: can be sent to individuals, sites, and custom groups

- Possibly add complete MMS features

- see discussion in OnSiteXI

### Incomplete reports summary/notifications

Report/List of Techs and incomplete reports (i.e. missing UnitNo. /Work Order
No. /Notes): Incomplete reports are persisted until completed or cleared by
Mgmt.

### iPad module for training sign-in

- Automatically submits training reports for technicians attending training meetings,

- Creates training meeting document: Date, Training Type, Training Hours, Topics Covered...,

- Safety Meeting and other training Sign-in Application:

- Tech input: username and signature fields,

- Track and Report all Training with analytics reporting....

### More detailed costs tracking with redesigned UI

Enhanced analytics for tracking expenses, invoices, payments and more

- Customizable reports UI
 - Scenario reports
 - Scheduled vs Worked Hours
 - Percentage of work hours invoiced (Real-time)
 - Percentage of invoiced hours paid (Real-time)

- Current google docs for payroll and invoice tracking integrated into the console

### Track Invoices and Payments
UI for tracking all invoices: tech hours/invoice/PO's & AuthNo(s)/Payments.  Dates: expected/actual tracked.  Invoices can be viewed by group or individually; fields for notes, partial payments... Additional editable fields as needed.  Username access security will be applied to these pages.  

- Actual vs Expected monthly totals,

- Analytics and graphs for income projections...

- Calendar UI showing expected Payments,

- Customizable reporting ranges for the above,

- Main Display: Client, Location, Location ID, Invoiced Dates, Invoice Date, Expected Payment Date

- Partial Access can be granted for limited views,

- Persistent Tracking for unpaid invoices,

- Restricted Access Page (Chris' user controls Office user access from office staff list),

- Summary by Site and Total of outstanding invoices,

- Track uninvoiced reports (with summary report for all uninvoiced Tech work reports),

- Tracks Reports associated with each invoice,

- UI/Page for Invoices: Includes Date Submitted, Expected PayDate, Payment Received.

### Track SESA vehicles (like schedule -shows where units are…)

Track payment amounts and number of months until paid off… other info TBD

New report features in OnSiteXI for SE Weslaco shop notate repairs/mileage/parts
and service checklists

Units are tracked in an enhanced schedule interface

### Travel Module and Schedule Enhancements

Worksites requiring Technician Air-travel will flag and list tickets to be
purchased for upcoming travel. Flight details can be added and perpetuate to
techs with flight plans…

### Update (Pre) AUTH-doc processing

TBD: improve uploading and parsing the Authorization PDF documents sent from
Halliburton…

### WorkSite UI redesign

- Standardize site IDs; Improved UI and form fields for WorkSites

- Add config UI for adding new types of worksites

### Schedule Module Enhancements

Enhancements:

- Clicking on a worksite presents a schedule detail (with dates) UI

- Set non-standard rotations (4 weeks on, 2 off) or other customizable rotations

- Set travel day per tech

- Show/Edit SESA Units and Technician groups

- Show/Edit/Update Flights and times for air travel (perpetuated to user’s OnSiteXI account)

- Schedule and track manager’s travel (to help traveler track their own travel itinerary)
